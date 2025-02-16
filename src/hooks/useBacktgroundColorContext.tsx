import { useContext } from "react";
import { BackgroundColorContext } from "../contexts/BackgroundColorContext";

export const useBackgroundColor = () => {
  const context = useContext(BackgroundColorContext);

  if (context === undefined) {
    throw new Error("The component must be used inside a BackgroudColorContext.Provider");
  }

  return context;
}