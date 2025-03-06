import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import { ChartConfig, ChartContainer } from "../../ui/chart";

const chartData = [
  { month: "January", valor: 186 },
  { month: "February", valor: 305 },
  { month: "March", valor: 237 },
  { month: "April", valor: 73 },
  { month: "May", valor: 209 },
  { month: "June", valor: 214 },
];

const chartConfig = {
  valor: {
    label: "Desktop",
  },
} satisfies ChartConfig;

const SalesChart = () => {
  return (
    <Card className="flex-3/4 border-muted-foreground">
      <CardHeader>
        <CardTitle>Vendas gerais</CardTitle>
      </CardHeader>
      <ChartContainer config={chartConfig} className="max-h-[260px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            dataKey="valor"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <Bar dataKey="valor" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default SalesChart;
