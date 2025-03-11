import { Bar, BarChart, XAxis } from "recharts";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import { useSalesChartData } from "../../../hooks/useSalesChartData";

const chartConfig = {
  totalSales: { label: "Vendas", color: "#2563eb" },
  commission: { label: "Comissão", color: "#60a5fa" },
} satisfies ChartConfig;

const SalesChart = () => {
  const chartData = useSalesChartData();

  return (
    <Card className="flex-3/4 border-muted-foreground">
      <CardHeader>
        <CardTitle>Vendas vs Comissão</CardTitle>
      </CardHeader>
      <ChartContainer config={chartConfig} className="max-h-[260px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="totalSales" fill="var(--color-primary)" radius={4} />
          <Bar dataKey="commission" fill="var(--color-primary)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default SalesChart;
