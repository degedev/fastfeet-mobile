import { ArrowRight } from "phosphor-react-native";
import theme from "../../theme";
import {
  Container,
  ContainerHeader,
  Title,
  Text,
  Footer,
  Date,
  ContainerStatus,
  Content,
  TextStatus,
} from "./styles";
import { Image } from "react-native";
import { useTheme } from "styled-components/native";

import Svg, { Line, Circle } from "react-native-svg";

type LoadingProps = {
  title: string;
  date: string;
  status: string;
};

export function CardDeliverie({ title, date, status }: LoadingProps) {
  const { colors } = useTheme();
  return (
    <Container>
      <Content>
        <ContainerHeader>
          <Title>
            <Image source={require("../../../assets/Package.png")} />
            {title}
          </Title>
          <Date>{date}`</Date>
        </ContainerHeader>
        <ContainerStatus>
          <Svg height="25" width="100%">
            <Line
              x1="0%"
              x2="50%"
              y1="50%"
              y2="50%"
              stroke={colors.primaryGreen.main}
              strokeWidth="2"
            />
            <Line
              x1="50%"
              x2="100%"
              y1="50%"
              y2="50%"
              stroke={colors.primaryGreen.main}
              strokeWidth="2"
            />
            {[1, 2, 3].map((point, index) => (
              <Circle
                key={index}
                cx={`${2 + index * 48}%`}
                cy="50%"
                r="4"
                strokeWidth="4"
                stroke={colors.primaryGreen.main}
                fill={colors.white}
              />
            ))}
          </Svg>
        </ContainerStatus>
        <ContainerStatus>
          <TextStatus>AGUARDANDO</TextStatus>
          <TextStatus>RETIRADO </TextStatus>
          <TextStatus> ENTREGUE</TextStatus>
        </ContainerStatus>
      </Content>
      <Footer>
        <Text>Detalhes</Text>
        <ArrowRight
          size={16}
          color={theme.colors.primaryBlue.dark}
          weight="fill"
        />
      </Footer>
    </Container>
  );
}
