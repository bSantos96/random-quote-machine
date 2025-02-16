import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext";
import QuoteBoxSocials from "./QuoteBoxSocials";
import Button from "../ui/Button";

const handleButtonClick = (setBgColor: (color: string) => void) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  setBgColor(`rgb(${red}, ${green}, ${blue})`);
}

export default function QuoteBox() {
  const { setBgColor } = useBackgroundColor();

  return <div className="quote-box">
    <p className="quote">You can't use up creativity. The more you use, the more you have.</p>
    <p className="quote-author">- Maya Angelou</p>
    <div className="quote-box-footer">
      <QuoteBoxSocials />
      <Button onClick={() => handleButtonClick(setBgColor)}>New quote</Button>
    </div>
  </div>
}