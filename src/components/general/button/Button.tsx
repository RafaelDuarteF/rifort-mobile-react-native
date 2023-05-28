import { ButtonP, TextButtonP } from "./style";

import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width: string;
}

export default function Button({ title, width, ...rest }: ButtonProps) {
  return (
    <ButtonP width={width} {...rest}>
      <TextButtonP>{title}</TextButtonP>
    </ButtonP>
  );
}