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

type SellersProps = {
  sellers: Seller[];
};

const SelectSeller = ({ sellers }: SellersProps) => {
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
