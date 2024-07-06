import { useState } from "react";
import {
  Container,
  Header,
  Title,
  TitleFirstWord,
  Text,
  ViewFooter,
  Subtitle,
  Link,
  LinkText,
  LinkView,
} from "./styles";
import { Image } from "react-native";
import { useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Svg, { Line } from "react-native-svg";

export function ForgotPassword() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleHome() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Image source={require("../../../assets/Logotipo.png")} />
        <Image source={require("../../../assets/Logo.png")} />
      </Header>
      <Title>
        <TitleFirstWord>Esqueceu, {"\n"}</TitleFirstWord>
        sua senha?
      </Title>
      <Text>
        Por motivos de segurança, {"\n"}para recurá-la, vá até a central da
        {"\n"}
        distribuidora Fastfeet.
      </Text>
      <Subtitle>ENDEREÇO</Subtitle>
      <Text>
        Rua Guilherme Gemballa, 260{"\n"}
        Jardim América, SC{"\n"}
        89 168-000{"\n"}
      </Text>
      <ViewFooter>
        <Link onPress={handleHome}>
          <LinkView>
            <ArrowLeft
              size={16}
              weight="fill"
              color={theme.colors.primaryYellow.main}
              style={{ marginRight: -2.1 }}
            />
            <Svg height="25" width="50%">
              <Line
                x1="0"
                x2="80%"
                y1="49%"
                y2="49%"
                stroke={colors.primaryYellow.main}
                strokeWidth="1"
              />
            </Svg>
          </LinkView>
        </Link>
        <LinkText>Voltar para o login</LinkText>
      </ViewFooter>
    </Container>
  );
}
