type Props = {
  children: string
}

export default function Quote({ children }: React.PropsWithChildren<Props>) {
  return <p className="quote">{children}</p>
}