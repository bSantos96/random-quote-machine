import React from "react"
import { useBackgroundColor } from "../../hooks/useBacktgroundColorContext";

type Props = {
  name: string,
  url: string,
  children: React.ReactNode
}

export const Link = ({ children, url, name }: Props) => {
  const { bgColor } = useBackgroundColor();

  return <a className="link" href={url} title={name} style={{backgroundColor: bgColor}}>{children}</a>
}