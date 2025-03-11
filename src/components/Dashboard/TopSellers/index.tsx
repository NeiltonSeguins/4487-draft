import { useAppContext } from "@/hooks/useAppContext";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import SellerCard from "./SellerCard";

const TopSellers = () => {
  const { sellers } = useAppContext();

  return (
    <Card className="flex-1/12 border-muted-foreground h-[350px]">
      <CardHeader>
        <CardTitle>Ranking de vendedores</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 overflow-hidden overflow-y-scroll custom-scrollbar">
        {sellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TopSellers;
