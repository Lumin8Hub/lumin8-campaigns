import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WorkIndex from "./pages/work/WorkIndex.tsx";
import EarthSong from "./pages/work/EarthSong.tsx";
import UnapologeticallyJewish from "./pages/work/UnapologeticallyJewish.tsx";
import Sportball from "./pages/work/Sportball.tsx";
import JillianRodak from "./pages/work/JillianRodak.tsx";
import OnboardingPage from "./pages/OnboardingPage.tsx";

const queryClient = new QueryClient();

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/earth-song" element={<EarthSong />} />
          <Route path="/work/unapologetically-jewish" element={<UnapologeticallyJewish />} />
          <Route path="/work/sportball" element={<Sportball />} />
          <Route path="/work/jillian-rodak" element={<JillianRodak />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
