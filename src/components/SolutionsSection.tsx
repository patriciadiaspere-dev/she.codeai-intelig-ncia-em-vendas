import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Bot, MessageCircle, Headphones } from "lucide-react";

const features = [
  { icon: Bot, title: "Agentes de IA 24/7", description: "Respostas automáticas em segundos com linguagem natural e humanizada, sem parecer robótico." },
  { icon: MessageCircle, title: "Qualificação Inteligente", description: "Leads são qualificados automaticamente antes de chegarem ao seu time comercial." },
  { icon: Headphones, title: "Suporte Técnico Automatizado", description: "Resolução de dúvidas pós-venda, rastreamento e trocas sem intervenção humana." },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="atendimento" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <p className="text-xs text-neon-purple font-semibold uppercase tracking-wider mb-3 text-center">Atendimento Inteligente</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          WhatsApp & Chatbot com <span className="text-gradient">Inteligência Artificial</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Automatize seu atendimento e converta mais clientes enquanto dorme. Tecnologia que vende por você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.15}s` }}
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
