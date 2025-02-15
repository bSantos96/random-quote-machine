type Props = {
  src: string,
  alt: string
}

export default function Icon(props: Props) {
  return <img className="icon" {...props} />
}