import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Filtrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalhes do vendedor</DialogTitle>
          <DialogDescription>
            Confira abaixo os números do vendedor selecionado:
          </DialogDescription>
        </DialogHeader>
        <h1 className="font-sans font-semibold text-2xl">Tabata Amaral</h1>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Card className="min-w-[183px] gap-2.5 border-muted-foreground">
            <CardHeader>
              <CardTitle>Vendas totais</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="font-sans font-semibold text-2xl">R$ 5530,00</h2>
              <CardDescription className="font-normal text-sm">
                +10% sobre o mês passado
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="min-w-[183px] gap-2.5 border-muted-foreground">
            <CardHeader>
              <CardTitle>Comissões</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="font-sans font-semibold text-2xl">R$ 127,00</h2>
              <CardDescription className="font-normal text-sm">
                +10% sobre o mês passado
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="min-w-[183px] gap-2.5 border-muted-foreground">
            <CardHeader>
              <CardTitle>Itens vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="font-sans font-semibold text-2xl">12</h2>
              <CardDescription className="font-normal text-sm">
                +10% sobre o mês passado
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="min-w-[183px] gap-2.5 border-muted-foreground">
            <CardHeader>
              <CardTitle>Número de vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="font-sans font-semibold text-2xl">8</h2>
              <CardDescription className="font-normal text-sm">
                +10% sobre o mês passado
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
