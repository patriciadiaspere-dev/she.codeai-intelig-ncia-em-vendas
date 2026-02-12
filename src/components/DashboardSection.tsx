import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Package, RefreshCw, TrendingUp } from "lucide-react";


const managementFeatures = [
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle automatizado de estoque com alertas inteligentes de reposição e previsão de demanda.",
  },
  {
    icon: RefreshCw,
    title: "Visibilidade de Repasses",
    description: "Tenha clareza sobre os repasses, quando e quais ordens foram e serão pagas.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Lucro Real",
    description: "Visão clara do lucro real por produto, considerando todas as taxas, devoluções e custos ocultos.",
  },
];

const DashboardSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dashboard" className="py-28 relative" ref={ref}>
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-60" />

      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Gestão Inteligente</span> de Marketplace
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Automatizamos sua operação complexa na Amazon e simplificamos sua visão de lucro real.
        </p>

        {/* Management features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {managementFeatures.map((feat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors">
                <feat.icon className="h-6 w-6 text-neon-blue" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardSection;
