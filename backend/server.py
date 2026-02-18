from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Schedule Evaluation Models
class ScheduleEvaluationCreate(BaseModel):
    name: str
    email: str
    phone: str
    service: str
    location: str
    message: Optional[str] = None

class ScheduleEvaluation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    service: str
    location: str
    message: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Schedule Evaluation Endpoints
@api_router.post("/schedule-evaluation", response_model=ScheduleEvaluation)
async def create_schedule_evaluation(input: ScheduleEvaluationCreate):
    """Create a new schedule evaluation request"""
    evaluation_dict = input.model_dump()
    evaluation_obj = ScheduleEvaluation(**evaluation_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = evaluation_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.schedule_evaluations.insert_one(doc)
    
    logger.info(f"New evaluation request created: {evaluation_obj.id} - {evaluation_obj.name}")
    
    return evaluation_obj

@api_router.get("/schedule-evaluations", response_model=List[ScheduleEvaluation])
async def get_schedule_evaluations():
    """Get all schedule evaluation requests"""
    evaluations = await db.schedule_evaluations.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for evaluation in evaluations:
        if isinstance(evaluation.get('created_at'), str):
            evaluation['created_at'] = datetime.fromisoformat(evaluation['created_at'])
    
    return evaluations

@api_router.get("/schedule-evaluations/{evaluation_id}", response_model=ScheduleEvaluation)
async def get_schedule_evaluation(evaluation_id: str):
    """Get a specific schedule evaluation by ID"""
    evaluation = await db.schedule_evaluations.find_one({"id": evaluation_id}, {"_id": 0})
    
    if not evaluation:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Evaluation not found")
    
    if isinstance(evaluation.get('created_at'), str):
        evaluation['created_at'] = datetime.fromisoformat(evaluation['created_at'])
    
    return evaluation


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()