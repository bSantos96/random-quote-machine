import { createContext } from "react";

type BackgroundColorContextType = {
  bgColor: string,
  setBgColor: (color: string) => void
}

export const BackgroundColorContext = createContext<BackgroundColorContextType | undefined>(undefined);