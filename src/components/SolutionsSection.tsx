import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageCircle, BarChart3, Bot, Database } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Atendimento Inteligente",
    subtitle: "WhatsApp & Chatbot",
    description: "Agentes de IA que atendem, qualificam leads e fecham vendas 24/7 com linguagem natural e humanizada.",
    features: ["Respostas automáticas em segundos", "Qualificação inteligente de leads", "Integração com CRM"],
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    subtitle: "Dashboards & APIs",
    description: "Painéis automáticos que consolidam vendas, estoque e repasses da Amazon em um só lugar.",
    features: ["Dados em tempo real via API", "Alertas de estoque e performance", "Relatórios de lucro real"],
  },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solutions" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Nossas <span className="text-gradient">Soluções</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Tecnologia de ponta para transformar dados em decisões e atendimento em receita.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-5 group-hover:bg-neon-blue/20 transition-colors">
                <sol.icon className="h-7 w-7 text-neon-blue" />
              </div>
              <p className="text-xs text-neon-purple font-semibold uppercase tracking-wider mb-1">{sol.subtitle}</p>
              <h3 className="font-display text-2xl font-semibold mb-3">{sol.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{sol.description}</p>
              <ul className="space-y-2">
                {sol.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
