import { useState } from "react";
import QuoteBox from "./quote/QuoteBox";
import { BackgroundColorContext } from "../contexts/BackgroundColorContext";

export default function App() {
  const [bgColor, setBgColor] = useState("");

  return (
    <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
      <div className="app" style={{backgroundColor: bgColor}}>
        <QuoteBox />
      </div>
    </BackgroundColorContext.Provider>
  );
}

