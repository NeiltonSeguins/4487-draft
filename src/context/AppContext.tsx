/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Seller } from "../types";

interface AppContextType {
  search: string;
  updateSearch: (newSearch: string) => void;
  suggestions: Seller[];
  sellers: Seller[];
  selectedSeller: Seller | null;
  selectSeller: (sellerId: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Seller[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<Seller | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/sellers")
      .then((res) => res.json())
      .then(setSellers);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = sellers.filter((seller) =>
      seller.name.toLowerCase().includes(search.toLowerCase())
    );

    setSuggestions(filtered);
  }, [search, sellers]);

  const updateSearch = (newSearch: string) => setSearch(newSearch);

  const selectSeller = (sellerId: number) => {
    const seller = sellers.find((s) => s.id === sellerId) || null;
    setSelectedSeller(seller);
  };

  const value: AppContextType = {
    search,
    updateSearch,
    suggestions,
    sellers,
    selectedSeller,
    selectSeller,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext deve ser usado dentro de um contexto");
  }
  return context;
};
