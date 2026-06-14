import "@/App.css";
import MaintenancePage from "./pages/MaintenancePage";

// MAINTENANCE MODE ACTIVE
// To restore the full landing page, uncomment the code below and remove MaintenancePage

/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { Toaster } from "./components/ui/sonner";
import { ServiceAlert } from "./components/sections/ServiceAlert";

function App() {
  return (
    <div className="App">
      <ServiceAlert />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <MaintenancePage />
    </div>
  );
}

export default App;
