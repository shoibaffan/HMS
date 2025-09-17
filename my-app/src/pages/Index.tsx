import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import PatientManagement from "@/components/patients/PatientManagement";
import PhysiotherapistManagement from "@/components/physiotherapists/PhysiotherapistManagement";
import AppointmentManagement from "@/components/appointments/AppointmentManagement";
import StaffManagement from "@/components/staff/StaffManagement";
import TreatmentManagement from "@/components/treatments/TreatmentManagement";

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Add search logic here based on active section
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "patients":
        return <PatientManagement />;
      case "physiotherapists":
        return <PhysiotherapistManagement />;
      case "staff":
        return <StaffManagement />;
      case "appointments":
        return <AppointmentManagement />;
      case "treatments":
        return <TreatmentManagement />;
      case "reports":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Reports</h1>
            <p className="text-muted-foreground">Reports and analytics coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-foreground mb-4">Settings</h1>
            <p className="text-muted-foreground">System settings coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 lg:ml-0">
        <Header 
          activeSection={activeSection}
          onLogout={handleLogout}
          onSearch={handleSearch}
        />
        <main className="min-h-[calc(100vh-73px)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;