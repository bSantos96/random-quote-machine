type Props = {
  src: string,
  alt: string
}

export const Icon = (props: Props) => {
  return <img className="icon" {...props} />
}