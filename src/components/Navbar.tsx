import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Estatísticas", href: "#stats" },
  { label: "Desafios", href: "#pain" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dados", href: "#dashboard" },
  { label: "Contato", href: "#contact" },
];

const SheCodeLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" stroke="hsl(var(--neon-purple))" strokeWidth="2" fill="none"
        filter="url(#logoGlow)" />
      <circle cx="18" cy="18" r="4" fill="hsl(var(--neon-purple))" filter="url(#dotGlow)" />
      <defs>
        <filter id="logoGlow" x="-4" y="-4" width="44" height="44" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="dotGlow" x="8" y="8" width="20" height="20" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </svg>
    <span className="font-display text-lg font-bold tracking-tight text-foreground">
      She<span className="text-gradient">.Code</span>AI
    </span>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <SheCodeLogo />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button
            className="glow-button text-primary-foreground border-0"
            onClick={() => scrollTo("#contact")}
          >
            Falar com um Especialista
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-border">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {l.label}
                </button>
              ))}
              <Button
                className="glow-button text-primary-foreground border-0 mt-4"
                onClick={() => scrollTo("#contact")}
              >
                Falar com um Especialista
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
