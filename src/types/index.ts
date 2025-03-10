export interface Sale {
  amount: number;
  date: string; // Formato ISO 8601, ex: "2024-03-07T12:00:00Z"
  sellerId: number;
}

export interface Seller {
  id: number;
  name: string;
  email: string;
  photo: string;
  totalSales: number;
  commission: number;
  itemsSold: number;
  salesCount: number;
  sales: Sale[];
}
