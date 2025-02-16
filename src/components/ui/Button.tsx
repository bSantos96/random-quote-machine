import React from "react"
import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext"

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: string
}

export const Button = ({ onClick, children }: Props) => {
  const { bgColor } = useBackgroundColor();

  return <button style={{ backgroundColor: bgColor }} type="button" onClick={onClick} className="button">{children}</button>
}