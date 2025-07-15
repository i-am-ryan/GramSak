
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DownloadCenter from "./pages/DownloadCenter";
import AboutUs from "./pages/AboutUs";
import OurOfferings from "./pages/OurOfferings";
import Projects from "./pages/Projects";
import Partners from "./pages/Partners";
import NewPartners from "./pages/NewPartners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-offerings" element={<OurOfferings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/new-partners" element={<NewPartners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download-center" element={<DownloadCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
