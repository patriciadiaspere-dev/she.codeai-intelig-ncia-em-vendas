import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

const DashboardSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="dashboard" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Transparência Total</span> nos Repasses
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Veja exatamente para onde vai cada centavo. Nossos dashboards descomplicam os dados da Amazon em tempo real.
        </p>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}
        >
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
    </section>
  );
};

export default DashboardSection;
