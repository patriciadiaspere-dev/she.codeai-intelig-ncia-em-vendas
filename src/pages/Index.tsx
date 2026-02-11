import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainSection from "@/components/PainSection";
import DashboardSection from "@/components/DashboardSection";
import SolutionsSection from "@/components/SolutionsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <PainSection />
        <DashboardSection />
        <SolutionsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
