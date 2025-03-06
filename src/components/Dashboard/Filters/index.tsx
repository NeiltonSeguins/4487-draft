import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import DatePicker from "../DataPicker";

const Filters = () => {
  return (
    <section className="py-7 flex justify-start items-center gap-4 w-xl">
      <Input
        className="border-muted-foreground grow"
        type="text"
        placeholder="Selecione o vendedor"
      />
      <DatePicker />
      <Button>Filtrar</Button>
    </section>
  );
};

export default Filters;
