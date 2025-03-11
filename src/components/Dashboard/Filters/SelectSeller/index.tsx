import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppContext } from "@/hooks/useAppContext";

const SelectSeller = () => {
  const { sellers, selectSeller } = useAppContext();

  return (
    <Select onValueChange={(value) => selectSeller(value)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione um vendedor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vendedores</SelectLabel>
          {sellers.map((seller) => (
            <SelectItem key={seller.id} value={String(seller.id)}>
              {seller.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectSeller;
