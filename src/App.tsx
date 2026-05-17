import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Restaurant from "./pages/Restaurant";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ActiveSiteProvider } from "./context/ActiveSiteContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ActiveSiteProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LoadingScreen />
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <FloatingBookButton />
        </BrowserRouter>
      </ActiveSiteProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
