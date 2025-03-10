/* eslint-disable react-refresh/only-export-components */
import React, {
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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Seller[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);

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

  const updateSearch = (newSearch: string) => {
    setSearch(newSearch);
  };

  const value: AppContextType = {
    search,
    updateSearch,
    suggestions,
    sellers,
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
