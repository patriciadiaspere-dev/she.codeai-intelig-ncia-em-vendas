import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact" className="py-12 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <div
          className="text-center mb-10"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}
        >
          <Button
            className="glow-button text-primary-foreground border-0 text-lg px-8 py-6 rounded-xl"
            size="lg"
            onClick={() => (window as any).Typebot?.open()}
          >
            Falar com uma Especialista
          </Button>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border/50 pt-6">
          <p>© 2026 She.CodeAI — Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/she.codeai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/company/she-codeai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:contato@shecodeai.com.br" className="hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
