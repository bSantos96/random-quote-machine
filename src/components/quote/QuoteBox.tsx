import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext";
import { QuoteBoxSocials } from "./QuoteBoxSocials";
import { Button } from "../ui/Button";
import { QueryObserverResult, RefetchOptions, useQuery } from "@tanstack/react-query";

type QuoteType = {
  author: string,
  quote: string
}

const fetchRandomQuote = async () => {
  const response = await fetch("https://qapi.vercel.app/api/random");

  if (!response.ok) {
    throw new Error("Failed to fetch quote");
  }
  
  return response.json();
}

const handleButtonClick = async (
  setBgColor: (color: string) => void,
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<QuoteType, Error>>) => {
  await refetch();
  const red = Math.floor(Math.random() * 150);
  const green = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 100);

  setBgColor(`rgb(${red}, ${green}, ${blue})`);
}

export const QuoteBox = () => {
  const { setBgColor } = useBackgroundColor();

  const {data, isFetching, refetch} = useQuery<QuoteType>({
    queryKey: ["randomQuote"],
    queryFn: fetchRandomQuote,
  });

  return <div className="quote-box">
    <p className="quote">{data?.quote}</p>
    <p className="quote-author">{data?.author ? `- ${data?.author}` : new String()}</p>
    <div className="quote-box-footer">
      <QuoteBoxSocials />
      <Button isLoading={isFetching} onClick={() => handleButtonClick(setBgColor, refetch)}>New quote</Button>
    </div>
  </div>
}