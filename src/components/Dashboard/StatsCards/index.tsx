import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useAppContext } from "@/context/AppContext";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const StatsCards = () => {
  const { sellers } = useAppContext();

  const totals = sellers.reduce(
    (acc, seller) => {
      acc.totalSales += seller.totalSales;
      acc.commission += seller.commission;
      acc.itemsSold += seller.itemsSold;
      acc.salesCount += seller.salesCount;
      return acc;
    },
    { totalSales: 0, commission: 0, itemsSold: 0, salesCount: 0 }
  );

  return (
    <section className="flex justify-between pt-4 pb-2">
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Vendas totais</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">
            {formatCurrency(totals.totalSales)}
          </h2>
          <CardDescription>+10% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Comissões</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">
            {formatCurrency(totals.commission)}
          </h2>
          <CardDescription>+5% do total</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Itens vendidos</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">
            {totals.itemsSold}
          </h2>
          <CardDescription>+15% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Número de vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">
            {totals.salesCount}
          </h2>
          <CardDescription>+12% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default StatsCards;
