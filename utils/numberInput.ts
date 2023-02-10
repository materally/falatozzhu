interface Props {
  value: string;
  setter: (value: string) => void;
}

export const numberInput = ({ value, setter }: Props) => setter(value.replace(/[^0-9]/g, ''))
