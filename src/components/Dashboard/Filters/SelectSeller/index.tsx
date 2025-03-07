import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Seller } from "@/types";
import { useEffect, useState } from "react";

const SelectSeller = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/sellers")
      .then((res) => res.json())
      .then(setSellers);
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione um vendedor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vendedores</SelectLabel>
          {sellers.map((seller) => (
            <SelectItem key={seller.id} value={seller.name}>
              {seller.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectSeller;
