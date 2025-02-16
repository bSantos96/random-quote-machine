import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext";
import { QuoteBoxSocials } from "./QuoteBoxSocials";
import { Button } from "../ui/Button";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query";

type QuoteType = {
  author: string,
  content: string
}

const fetchRandomQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");

  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }

  return response.json();
}

const handleButtonClick = (
  setBgColor: (color: string) => void,
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<QuoteType, Error>>) => {
  const red = Math.floor(Math.random() * 150);
  const green = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 100);

  setBgColor(`rgb(${red}, ${green}, ${blue})`);
  refetch();
}

export const QuoteBox = () => {
  const { setBgColor } = useBackgroundColor();

  const {data, refetch} = useQuery<QuoteType>({
    queryKey: ["randomQuote"],
    queryFn: fetchRandomQuote
  });

  return <div className="quote-box">
    <p className="quote">{data?.content}</p>
    <p className="quote-author">- {data?.author}</p>
    <div className="quote-box-footer">
      <QuoteBoxSocials />
      <Button onClick={() => handleButtonClick(setBgColor, refetch)}>New quote</Button>
    </div>
  </div>
}