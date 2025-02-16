import { useState } from "react";
import { QuoteBox } from "./quote/QuoteBox";
import { BackgroundColorContext } from "../contexts/BackgroundColorContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents auto-refetch when window regains focus
      retry: 1, // Only retry failed requests once
    },
  },
});

export const App = () => {
  const [bgColor, setBgColor] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
        <div className="app" style={{ backgroundColor: bgColor }}>
          <QuoteBox />
        </div>
      </BackgroundColorContext.Provider>
    </QueryClientProvider>
  );
}

