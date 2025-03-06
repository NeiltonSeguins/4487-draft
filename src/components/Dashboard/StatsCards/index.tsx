import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const StatsCards = () => {
  return (
    <section className="flex justify-between pt-4 pb-2">
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Vendas totais</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">R$ 25530,00</h2>
          <CardDescription>+10% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Comissões</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">R$ 1275,50</h2>
          <CardDescription>+5% do total</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Itens vendidos</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">72</h2>
          <CardDescription>+15% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
      <Card className="min-w-[272px] gap-2.5 border-muted-foreground">
        <CardHeader>
          <CardTitle>Número de vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-sans font-semibold text-2xl">42</h2>
          <CardDescription>+12% sobre o mês passado</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default StatsCards;
