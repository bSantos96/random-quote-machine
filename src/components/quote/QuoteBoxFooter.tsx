import Button from "../ui/Button";
import QuoteBoxSocials from "./QuoteBoxSocials";
import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext";

export default function QuoteBoxFooter() {
  const { setBgColor } = useBackgroundColor();

  const handleButtonClick = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setBgColor(`rgb(${red}, ${green}, ${blue})`);
  }

  return <div className="quote-box-footer">
    <QuoteBoxSocials />
    <Button onClick={handleButtonClick}>New quote</Button>
  </div>
}