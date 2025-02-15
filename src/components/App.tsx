import { useState } from "react";
import Quote from "./quote/Quote";
import QuoteAuthor from "./quote/QuoteAuthor";
import QuoteBox from "./quote/QuoteBox";
import QuoteBoxFooter from "./quote/QuoteBoxFooter";
import { BackgroundColorContext } from "../contexts/BackgroundColorContext";



export default function App() {
  const [bgColor, setBgColor] = useState("");

  return (
    <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
      <div className="app" style={{backgroundColor: bgColor}}>
        <QuoteBox>
          <Quote>You can't use up creativity. The more you use, the more you have.</Quote>
          <QuoteAuthor>- Maya Angelou</QuoteAuthor>
          <QuoteBoxFooter />
        </QuoteBox>
      </div>
    </BackgroundColorContext.Provider>
  );
}

