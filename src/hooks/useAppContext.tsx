import { AppContext, AppContextType } from "@/context/AppContext";
import { useContext } from "react";

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext deve ser usado dentro de um contexto");
  }
  return context;
};
