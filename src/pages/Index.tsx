import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainSection from "@/components/PainSection";
import SolutionsSection from "@/components/SolutionsSection";
import DashboardSection from "@/components/DashboardSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PainSection />

        {/* Pilar 1: Automação de Atendimento */}
        <SolutionsSection />

        {/* Visual separator */}
        <div className="py-8">
          <div className="border-t border-border/20 mx-auto max-w-5xl" />
        </div>

        {/* Pilar 2: Gestão de Marketplace */}
        <DashboardSection />

        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
