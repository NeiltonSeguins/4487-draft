import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardInfoModal from "./CardInfoModal";
import { useAppContext } from "@/hooks/useAppContext";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const Modal = () => {
  const { selectedSeller } = useAppContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Filtrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalhes do vendedor</DialogTitle>
          <DialogDescription>
            {selectedSeller
              ? `Confira abaixo os números do(a) vendedor(a):`
              : "Selecione um vendedor para visualizar os dados."}
          </DialogDescription>
        </DialogHeader>
        {selectedSeller && (
          <>
            <h1 className="font-sans font-semibold text-2xl">
              {selectedSeller.name}
            </h1>
            <div className="grid grid-cols-2 gap-4 py-4">
              <CardInfoModal
                title="Vendas totais"
                value={formatCurrency(selectedSeller.totalSales)}
              />
              <CardInfoModal
                title="Comissões"
                value={formatCurrency(selectedSeller.commission)}
              />
              <CardInfoModal
                title="Itens vendidos"
                value={selectedSeller.itemsSold}
              />
              <CardInfoModal
                title="Número de vendas"
                value={selectedSeller.salesCount}
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
