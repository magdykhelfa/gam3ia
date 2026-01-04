import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { MembersTable } from "@/components/MembersTable";
import { BeneficiariesTable } from "@/components/BeneficiariesTable";
import { DonorsTable } from "@/components/DonorsTable";
import { IncomingDonationsTable } from "@/components/IncomingDonationsTable";
import { OutgoingDonationsTable } from "@/components/OutgoingDonationsTable";
import { ExpensesTable } from "@/components/ExpensesTable";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "members":
        return <MembersTable />;
      case "beneficiaries":
        return <BeneficiariesTable />;
      case "donors":
        return <DonorsTable />;
      case "incoming":
        return <IncomingDonationsTable />;
      case "outgoing":
        return <OutgoingDonationsTable />;
      case "expenses":
        return <ExpensesTable />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 lg:mr-0 p-4 lg:p-8 pt-16 lg:pt-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
