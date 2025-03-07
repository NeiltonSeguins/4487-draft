import { Seller } from "@/types";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

type HeaderProps = {
  suggestions: Seller[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ suggestions, setSearch }: HeaderProps) => {
  return (
    <header className="flex h-full items-center justify-between p-4">
      <a href="#" className="font-semibold">
        Visão geral
      </a>
      <div className="flex gap-4">
        <div className="relative z-10 w-2xs flex flex-col">
          <Input
            className="border-muted-foreground w-full"
            type="text"
            placeholder="O que você está procurando?"
            onChange={(e) => setSearch(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-1 bg-white shadow-md border border-gray-200 rounded-md w-full max-h-40 overflow-y-auto custom-scrollbar z-50">
              {suggestions.map((seller) => (
                <li
                  key={seller.id}
                  className="px-4 py-2 text-muted-foreground text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {seller.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button>Buscar</Button>
      </div>
    </header>
  );
};

export default Header;
