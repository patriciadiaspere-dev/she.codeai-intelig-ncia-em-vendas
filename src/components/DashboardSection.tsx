import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown, Package, RefreshCw, TrendingUp } from "lucide-react";

const data = [
  { name: "Jan", vendaBruta: 45000, taxasFBA: 8100, comissoes: 6750, lucro: 30150 },
  { name: "Fev", vendaBruta: 52000, taxasFBA: 9360, comissoes: 7800, lucro: 34840 },
  { name: "Mar", vendaBruta: 48000, taxasFBA: 8640, comissoes: 7200, lucro: 32160 },
  { name: "Abr", vendaBruta: 61000, taxasFBA: 10980, comissoes: 9150, lucro: 40870 },
  { name: "Mai", vendaBruta: 55000, taxasFBA: 9900, comissoes: 8250, lucro: 36850 },
  { name: "Jun", vendaBruta: 67000, taxasFBA: 12060, comissoes: 10050, lucro: 44890 },
];

const orderDetail = {
  sku: "SHE-PRD-2847",
  vendaBruta: "R$ 189,90",
  taxaFBA: "R$ 34,18 (18%)",
  comissao: "R$ 28,49 (15%)",
  frete: "R$ 12,50",
  lucroLiquido: "R$ 114,73",
};

const managementFeatures = [
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle automatizado de estoque com alertas inteligentes de reposição e previsão de demanda.",
  },
  {
    icon: RefreshCw,
    title: "Conciliação de Repasses",
    description: "Reconciliação automática de repasses Amazon com identificação de divergências em tempo real.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Lucro Real",
    description: "Visão clara do lucro real por produto, considerando todas as taxas, devoluções e custos ocultos.",
  },
];

const DashboardSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section id="dashboard" className="py-28 relative" ref={ref}>
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-60" />

      <div className="container mx-auto px-4">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon-blue mb-4 mx-auto block w-fit">
          Pilar 2 — Gestão de Marketplace
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Gestão Inteligente</span> de Marketplace
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Decisões lucrativas baseadas em dados reais. Veja exatamente para onde vai cada centavo dos seus repasses.
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

        {/* Interactive reveal button */}
        <div className="text-center mb-10">
          <Button
            onClick={() => setShowDashboard(!showDashboard)}
            className="glow-button text-primary-foreground border-0 px-8 py-6 text-base rounded-xl gap-2"
            size="lg"
          >
            Como atuamos na sua gestão?
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${showDashboard ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Dashboard reveal */}
        <div
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{
            maxHeight: showDashboard ? "800px" : "0px",
            opacity: showDashboard ? 1 : 0,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Chart */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Visão Mensal — Venda vs. Custos vs. Lucro</h3>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230 20% 22%)" />
                  <XAxis dataKey="name" stroke="hsl(220 15% 60%)" fontSize={12} />
                  <YAxis stroke="hsl(220 15% 60%)" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={{ background: "hsl(230 25% 12%)", border: "1px solid hsl(230 20% 22%)", borderRadius: "12px", color: "hsl(220 20% 95%)" }}
                    formatter={(value: number) => `R$ ${value.toLocaleString("pt-BR")}`}
                  />
                  <Legend />
                  <Bar dataKey="vendaBruta" name="Venda Bruta" fill="hsl(271 91% 65%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="taxasFBA" name="Taxas FBA" fill="hsl(0 70% 55%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comissoes" name="Comissões" fill="hsl(40 90% 55%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="lucro" name="Lucro Líquido" fill="hsl(150 70% 45%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Order Detail */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="font-display text-lg font-semibold mb-5">Detalhamento de Ordem</h3>
              <div className="space-y-3 text-sm">
                {Object.entries(orderDetail).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground capitalize">
                      {key === "sku" ? "SKU" : key === "vendaBruta" ? "Venda Bruta" : key === "taxaFBA" ? "Taxa FBA" : key === "comissao" ? "Comissão" : key === "frete" ? "Frete" : "Lucro Líquido"}
                    </span>
                    <span className={key === "lucroLiquido" ? "text-gradient font-bold text-base" : "font-medium"}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
