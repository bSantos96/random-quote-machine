import React from "react"
import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext"

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: string,
  isLoading: boolean
}

export const Button = ({ onClick, children, isLoading }: Props) => {
  const { bgColor } = useBackgroundColor();

  return <button disabled={isLoading} style={{ backgroundColor: bgColor }} type="button" onClick={onClick} className="button">{children}</button>
}