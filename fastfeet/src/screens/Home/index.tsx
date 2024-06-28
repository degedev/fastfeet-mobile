import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CheckBox } from "../../components/CheckBox";
import {
  Container,
  Header,
  Title,
  TitleFirstWord,
  Text,
  Input,
  ViewEndForm,
  ViewUser,
  ViewIcon,
  ButtonEye,
} from "./styles";
import { Image, TouchableOpacity, View } from "react-native";
import { User, Lock, EyeSlash, Eye } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button/inde";

export function Home() {
  const { colors } = useTheme();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleSecureTextEntry, setToggleSecureTextEntry] = useState(true);

  function toggleSecureEntry() {
    setToggleSecureTextEntry(!toggleSecureTextEntry);
  }

  return (
    <Container>
      <Header>
        <Image source={require("../../../assets/Logotipo.png")} />
        <Image source={require("../../../assets/Logo.png")} />
      </Header>
      <Title>
        <TitleFirstWord>Entregador, {"\n"}</TitleFirstWord>
        você é nosso maior valor
      </Title>
      <Text>Faça seu login para{"\n"} começar suas entregas.</Text>
      <ViewUser>
        <ViewIcon>
          <User size={18} weight="fill" color={colors.primaryYellow.main} />
        </ViewIcon>
        <Input placeholder="CPF" />
      </ViewUser>
      <ViewUser>
        <ViewIcon>
          <Lock size={18} weight="fill" color={colors.primaryYellow.main} />
        </ViewIcon>
        <Input placeholder="Senha" secureTextEntry={toggleSecureTextEntry} />

        <ButtonEye onPress={toggleSecureEntry}>
          {toggleSecureTextEntry ? (
            <EyeSlash size={24} color={colors.primaryBlue.main} weight="fill" />
          ) : (
            <Eye size={24} color={colors.primaryBlue.main} weight="fill" />
          )}
        </ButtonEye>
      </ViewUser>
      <ViewEndForm>
        <CheckBox title="Lembrar-me" />
        <Text>Esqueci minha senha</Text>
      </ViewEndForm>
      <Button title={"Entrar"} />
    </Container>
  );
}
