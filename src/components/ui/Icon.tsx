import { useIcon } from "../../hooks/useIcon"

type Props = {
  name: string
}

export const Icon = ({name}: Props) => useIcon(name.toLowerCase());