import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Instagram, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate webhook call
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <footer id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className="max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-12"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3">
            Pronto para <span className="text-gradient">Escalar</span>?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Agende uma consultoria gratuita e descubra como a IA pode transformar seu e-commerce.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Seu nome" required className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" placeholder="(11) 99999-9999" required className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="revenue">Faturamento Mensal</Label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-border/50">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k">Até R$ 10 mil</SelectItem>
                    <SelectItem value="50k">R$ 10 mil - R$ 50 mil</SelectItem>
                    <SelectItem value="100k">R$ 50 mil - R$ 100 mil</SelectItem>
                    <SelectItem value="500k">R$ 100 mil - R$ 500 mil</SelectItem>
                    <SelectItem value="1m">Acima de R$ 500 mil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="glow-button text-primary-foreground border-0 w-full py-6 text-base" disabled={loading}>
              <Send className="h-4 w-4 mr-2" />
              {loading ? "Enviando..." : "Falar com um Especialista"}
            </Button>
          </form>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border/50 pt-8">
          <p>© 2026 She.CodeAI — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
