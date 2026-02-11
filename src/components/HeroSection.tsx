import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-neon-purple -top-32 -left-32" />
      <div className="orb w-[400px] h-[400px] bg-neon-blue -bottom-20 -right-20" />
      <div className="orb w-[300px] h-[300px] bg-neon-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-neon-purple" />
          Automação com IA para E-commerce
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Transforme seu Atendimento em{" "}
          <span className="text-gradient">Inteligência de Vendas</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Agentes de IA 24/7 via WhatsApp, chatbot humanizado e Dashboards que trazem clareza absoluta sobre seus repasses e lucros na Amazon.
        </p>

        <Button
          onClick={scrollToContact}
          className="glow-button text-primary-foreground border-0 text-lg px-8 py-6 rounded-xl"
          size="lg"
        >
          Quero automatizar minha operação
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
