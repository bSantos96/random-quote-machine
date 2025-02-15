type Props = {
  children: string
}

export default function QuoteAuthor({children}: React.PropsWithChildren<Props>) {
  return <p className="quote-author">{children}</p>
}