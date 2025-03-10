import Modal from "../Modal";
import SelectSeller from "./SelectSeller";

const Filters = () => {
  return (
    <section className="py-7 flex justify-start items-center gap-4 w-xl">
      <SelectSeller />
      <Modal />
    </section>
  );
};

export default Filters;
