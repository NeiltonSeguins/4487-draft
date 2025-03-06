import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const Header = () => {
  return (
    <header className="flex h-full items-center justify-between p-4">
      <a href="#" className="font-semibold">
        Visão geral
      </a>
      <div className="flex gap-4 w-lg">
        <Input
          className="border-muted-foreground"
          type="text"
          placeholder="O que você está procurando?"
        />
        <Button>Buscar</Button>
      </div>
    </header>
  );
};

export default Header;
