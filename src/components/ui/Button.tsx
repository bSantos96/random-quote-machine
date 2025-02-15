import React, { PropsWithChildren } from "react"
import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext"

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: string
}

export default function Button({onClick, children}: PropsWithChildren<Props>) {
  const {bgColor} = useBackgroundColor();

  return <button style={{backgroundColor: bgColor}} type="button" onClick={onClick} className="button">{children}</button>
}