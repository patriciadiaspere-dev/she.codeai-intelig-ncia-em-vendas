import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Bot, MessageCircle, Headphones, Users, Zap } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Pré e Pós-venda",
    description: "Conquiste o cliente desde o primeiro contato e fidelize com agilidade humana em todos os canais.",
  },
  {
    icon: Zap,
    title: "Impulsione sua Marca",
    description: "Transforme interações em oportunidades de venda com fluxos automáticos de resposta e captação de leads.",
  },
];

const features = [
  { icon: Bot, title: "Agentes de IA 24/7", description: "Respostas automáticas em segundos com linguagem natural e humanizada, sem parecer robótico." },
  { icon: MessageCircle, title: "Qualificação Inteligente", description: "Leads são qualificados automaticamente antes de chegarem ao seu time comercial." },
  { icon: Headphones, title: "Suporte Técnico Automatizado", description: "Resolução de dúvidas pós-venda, rastreamento e trocas sem intervenção humana." },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="atendimento" className="py-28 relative" ref={ref}>
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue opacity-60" />

      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon-purple mb-4 mx-auto block w-fit">
          Pilar 1 — Automação de Atendimento
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Automação com bots personalizados{" "}
          <span className="text-gradient">para E-commerce</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
          Muito mais que um chat: uma ferramenta completa de relacionamento que automatiza respostas e personaliza conversas.
        </p>

        {/* Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {differentials.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group border-l-4 border-neon-purple/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center shrink-0 group-hover:bg-neon-purple/20 transition-colors">
                  <item.icon className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${(i + 2) * 0.15}s`,
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-5 group-hover:bg-neon-purple/20 transition-colors">
                <feat.icon className="h-7 w-7 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
