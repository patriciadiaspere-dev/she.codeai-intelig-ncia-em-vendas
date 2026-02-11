import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logoshe.png";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Estatísticas", href: "#stats" },
  { label: "Desafios", href: "#pain" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Soluções", href: "#solutions" },
  { label: "Contato", href: "#contact" },
];

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
          <img src={logo} alt="She.CodeAI" className="h-10 w-auto" />
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
            Agendar Consultoria
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
                Agendar Consultoria
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
