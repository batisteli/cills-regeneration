from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# SMTP Configuration
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.titan.email')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 465))
SMTP_EMAIL = os.environ.get('SMTP_EMAIL', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Service and Location mappings for readable emails
SERVICE_LABELS = {
    "sobrancelha": "Regeneração de Sobrancelhas",
    "barba": "Regeneração de Barba",
    "cabelo": "Regeneração Capilar",
    "todos": "Todos os tratamentos"
}

LOCATION_LABELS = {
    "vila-mariana": "Vila Mariana - Segunda-Feira",
    "moema": "Moema - Terça-Feira",
    "tatuape": "Tatuapé - Quarta-feira",
    "perdizes": "Perdizes - Quinta-Feira",
    "paulista": "Paulista - Sexta-feira",
    "vila-madalena": "Vila Madalena - Sábado"
}


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
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


# Email sending function
async def send_notification_email(evaluation: ScheduleEvaluation):
    """Send email notification for new evaluation request"""
    if not SMTP_EMAIL or not SMTP_PASSWORD or not NOTIFICATION_EMAIL:
        logger.warning("Email configuration not set, skipping email notification")
        return
    
    try:
        # Create email content
        service_label = SERVICE_LABELS.get(evaluation.service, evaluation.service)
        location_label = LOCATION_LABELS.get(evaluation.location, evaluation.location)
        
        html_content = f"""
        <html>
        <head>
            <style>
                body {{ font-family: 'Montserrat', Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #202a44; color: white; padding: 20px; text-align: center; }}
                .header h1 {{ color: #d4af37; margin: 0; }}
                .content {{ padding: 20px; background-color: #f9f9f9; }}
                .field {{ margin-bottom: 15px; }}
                .field-label {{ font-weight: bold; color: #202a44; }}
                .field-value {{ color: #555; }}
                .footer {{ background-color: #202a44; color: #999; padding: 15px; text-align: center; font-size: 12px; }}
                .highlight {{ background-color: #d4af37; color: #202a44; padding: 10px; border-radius: 5px; margin: 10px 0; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>STUDIO BATISTELI</h1>
                    <p>Nova Solicitação de Avaliação</p>
                </div>
                <div class="content">
                    <div class="highlight">
                        <strong>Novo agendamento recebido!</strong>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Nome:</span>
                        <span class="field-value">{evaluation.name}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">E-mail:</span>
                        <span class="field-value">{evaluation.email}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Telefone:</span>
                        <span class="field-value">{evaluation.phone}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Tratamento de Interesse:</span>
                        <span class="field-value">{service_label}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Unidade Preferida:</span>
                        <span class="field-value">{location_label}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Mensagem:</span>
                        <span class="field-value">{evaluation.message or 'Nenhuma mensagem adicional'}</span>
                    </div>
                    
                    <div class="field">
                        <span class="field-label">Data da Solicitação:</span>
                        <span class="field-value">{evaluation.created_at.strftime('%d/%m/%Y às %H:%M')}</span>
                    </div>
                </div>
                <div class="footer">
                    <p>Este é um e-mail automático do sistema de agendamento do Studio Batisteli.</p>
                    <p>© 2024 Studio Batisteli - Regeneração Capilar</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Create message
        message = MIMEMultipart("alternative")
        message["From"] = SMTP_EMAIL
        message["To"] = NOTIFICATION_EMAIL
        message["Subject"] = f"Nova Solicitação de Avaliação - {evaluation.name}"
        
        # Plain text version
        text_content = f"""
        NOVA SOLICITAÇÃO DE AVALIAÇÃO - STUDIO BATISTELI
        
        Nome: {evaluation.name}
        E-mail: {evaluation.email}
        Telefone: {evaluation.phone}
        Tratamento: {service_label}
        Unidade: {location_label}
        Mensagem: {evaluation.message or 'Nenhuma mensagem adicional'}
        Data: {evaluation.created_at.strftime('%d/%m/%Y às %H:%M')}
        """
        
        message.attach(MIMEText(text_content, "plain"))
        message.attach(MIMEText(html_content, "html"))
        
        # Send email using SSL
        await aiosmtplib.send(
            message,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            username=SMTP_EMAIL,
            password=SMTP_PASSWORD,
            use_tls=True
        )
        
        logger.info(f"Email notification sent successfully for evaluation {evaluation.id}")
        
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Schedule Evaluation Endpoints
@api_router.post("/schedule-evaluation", response_model=ScheduleEvaluation)
async def create_schedule_evaluation(input: ScheduleEvaluationCreate, background_tasks: BackgroundTasks):
    """Create a new schedule evaluation request and send email notification"""
    evaluation_dict = input.model_dump()
    evaluation_obj = ScheduleEvaluation(**evaluation_dict)
    
    doc = evaluation_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.schedule_evaluations.insert_one(doc)
    
    logger.info(f"New evaluation request created: {evaluation_obj.id} - {evaluation_obj.name}")
    
    # Send email notification in background
    background_tasks.add_task(send_notification_email, evaluation_obj)
    
    return evaluation_obj

@api_router.get("/schedule-evaluations", response_model=List[ScheduleEvaluation])
async def get_schedule_evaluations():
    """Get all schedule evaluation requests"""
    evaluations = await db.schedule_evaluations.find({}, {"_id": 0}).to_list(1000)
    
    for evaluation in evaluations:
        if isinstance(evaluation.get('created_at'), str):
            evaluation['created_at'] = datetime.fromisoformat(evaluation['created_at'])
    
    return evaluations

@api_router.get("/schedule-evaluations/{evaluation_id}", response_model=ScheduleEvaluation)
async def get_schedule_evaluation(evaluation_id: str):
    """Get a specific schedule evaluation by ID"""
    evaluation = await db.schedule_evaluations.find_one({"id": evaluation_id}, {"_id": 0})
    
    if not evaluation:
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

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
