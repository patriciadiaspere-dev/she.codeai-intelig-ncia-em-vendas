import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquareX, DollarSign, EyeOff } from "lucide-react";

const pains = [
  {
    icon: MessageSquareX,
    title: "Caos no Atendimento",
    description: "Mensagens perdidas, clientes sem resposta e vendas escapando por falta de agilidade no WhatsApp e chat.",
  },
  {
    icon: DollarSign,
    title: "Repasses da Amazon que não batem",
    description: "Taxas FBA, comissões e devoluções criam um labirinto financeiro impossível de rastrear manualmente.",
  },
  {
    icon: EyeOff,
    title: "Falta de visão de Lucro Real",
    description: "Sem dashboards claros, você vende muito mas não sabe quanto realmente sobra no final do mês.",
  },
];

const PainSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pain" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Você se identifica com <span className="text-gradient">algum desses desafios</span>?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Se pelo menos um desses problemas faz parte da sua rotina, a She.CodeAI foi criada para você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 group cursor-default"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-5 group-hover:bg-neon-purple/20 transition-colors">
                <pain.icon className="h-7 w-7 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pain.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
