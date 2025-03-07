import { Seller } from "@/types";
import DatePicker from "../DataPicker";
import Modal from "../Modal";
import SelectSeller from "./SelectSeller";

type SellersProps = {
  sellers: Seller[];
};

const Filters = ({ sellers }: SellersProps) => {
  return (
    <section className="py-7 flex justify-start items-center gap-4 w-xl">
      <SelectSeller sellers={sellers} />
      <DatePicker />
      <Modal />
    </section>
  );
};

export default Filters;
