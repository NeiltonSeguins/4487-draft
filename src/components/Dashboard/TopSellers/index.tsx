import { Seller } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { useEffect, useState } from "react";
import SellerCard from "./SellerCard";

const TopSellers = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/sellers")
      .then((res) => res.json())
      .then(setSellers);
  }, []);

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
