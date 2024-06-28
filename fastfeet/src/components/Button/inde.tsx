import { TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { Container, Text } from "./styles";

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
