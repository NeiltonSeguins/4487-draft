import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Header from "./components/Dashboard/Header";
import WelcomeSection from "./components/Dashboard/WelcomeSection";
import Filters from "./components/Dashboard/Filters";
import StatsCards from "./components/Dashboard/StatsCards";
import SalesChart from "./components/Dashboard/SalesChart";
import TopSellers from "./components/Dashboard/TopSellers";
import { useEffect, useState } from "react";
import { Seller } from "./types";

function App() {
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

  return (
    <section className="flex flex-col items-center h-full w-screen">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[800px] max-w-md rounded-lg border md:min-w-[1200px]"
      >
        <ResizablePanel defaultSize={10} className="!overflow-visible !relative">
          <Header suggestions={suggestions} setSearch={setSearch} />
        </ResizablePanel>
        <ResizableHandle className="border-current" />
        <ResizablePanel defaultSize={90}>
          <main className="p-6">
            <WelcomeSection />
            <Filters sellers={sellers} />
            <StatsCards />
            <section className="flex items-start gap-4 pt-2 h-max">
              <SalesChart />
              <TopSellers />
            </section>
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}

export default App;
