import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Results from "./pages/Results";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/book" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <a
        className="whatsapp-float"
        href="https://wa.me/254710273966?text=Hi%20I%E2%80%99m%20interested%20in%20your%20programs.%20Can%20you%20share%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          className="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M20.52 3.48A11.79 11.79 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6.03L0 24l6.3-1.65A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.79 11.79 0 0 0-3.48-8.52Zm-8.4 18.24c-1.63 0-3.23-.44-4.6-1.27l-.33-.2-3.73.98.99-3.63-.22-.36A9.7 9.7 0 0 1 2.4 12c0-5.31 4.29-9.6 9.6-9.6a9.56 9.56 0 0 1 6.78 2.81 9.5 9.5 0 0 1 2.82 6.79c0 5.31-4.29 9.6-9.6 9.6Zm5.21-7.14c-.29-.15-1.71-.85-1.98-.95-.27-.1-.47-.15-.66.15-.19.29-.7.95-.86 1.15-.16.2-.31.2-.58.07a7.65 7.65 0 0 1-2.24-1.38 8.4 8.4 0 0 1-1.56-1.93c-.16-.29-.02-.45.12-.6.12-.12.28-.31.42-.47.14-.16.19-.27.29-.45.1-.18.05-.35-.02-.5-.07-.15-.66-1.6-.9-2.2-.24-.57-.49-.5-.66-.5h-.57a1.11 1.11 0 0 0-.82.39c-.28.31-1.1 1.08-1.1 2.63s1.13 3.03 1.29 3.24c.16.2 2.22 3.4 5.38 4.77.75.32 1.33.51 1.79.65.75.23 1.43.2 1.97.12.6-.1 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.13-.27-.2-.57-.35Z"
          />
        </svg>
      </a>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
