import { useAppContext } from "@/context/AppContext";

export const useSalesChartData = () => {
  const { sellers } = useAppContext();

  return sellers.map((seller) => ({
    name: seller.name.split(" ")[0],
    totalSales: seller.totalSales,
    commission: seller.commission,
  }));
};
