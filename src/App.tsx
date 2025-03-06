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

function App() {
  return (
    <section className="flex flex-col items-center h-full w-screen">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[800px] max-w-md rounded-lg border md:min-w-[1200px]"
      >
        <ResizablePanel defaultSize={10}>
          <Header />
        </ResizablePanel>
        <ResizableHandle className="border-current" />
        <ResizablePanel defaultSize={90}>
          <main className="p-6">
            <WelcomeSection />
            <Filters />
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
