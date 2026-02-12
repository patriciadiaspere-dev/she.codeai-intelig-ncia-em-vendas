import { useScrollReveal, useCountUp } from "@/hooks/use-scroll-reveal";
import { Zap, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Clock, value: 5, suffix: " min", label: "Empresas que respondem em até 5 min convertem 9x mais" },
  { icon: TrendingUp, value: 78, suffix: "%", label: "Dos clientes compram da empresa que responde primeiro" },
  { icon: Zap, value: 9, suffix: "x", label: "Mais conversões com resposta rápida e automática" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="stats" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-gradient font-display font-semibold text-3xl md:text-4xl block">
            A velocidade é o novo diferencial competitivo no e-commerce
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.value, 1500, isVisible);
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 text-center"
                style={{ animationDelay: `${i * 0.2}s`, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.2}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-neon-purple" />
                <div className="font-display text-5xl font-bold text-gradient mb-3">
                  {count}{stat.suffix}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
