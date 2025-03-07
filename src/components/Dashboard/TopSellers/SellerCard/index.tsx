import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Seller } from "@/types";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

type SellerCardProps = {
  seller: Seller;
};

const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <Avatar className="w-[40px] h-[40px]">
        <AvatarImage src={seller.photo} alt="avatar" />
        <AvatarFallback>{seller.id}</AvatarFallback>
      </Avatar>
      <div className="grow">
        <h3 className="font-sans font-medium text-sm">{seller.name}</h3>
        <p className="font-sans font-normal text-sm text-muted-foreground">
          {seller.email}
        </p>
      </div>
      <span className="font-medium font-sans text-base">
        {formatCurrency(seller.totalSales)}
      </span>
    </div>
  );
};

export default SellerCard;
