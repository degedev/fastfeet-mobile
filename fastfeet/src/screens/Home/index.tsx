import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
  Link,
  ButtonEye,
  ModalView,
  TitleModal,
} from "./styles";
import { Image, Modal, TouchableWithoutFeedback } from "react-native";
import { User, Lock, EyeSlash, Eye, XCircle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { Keyboard } from "react-native";

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleSecureTextEntry, setToggleSecureTextEntry] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function toggleSecureEntry() {
    setToggleSecureTextEntry(!toggleSecureTextEntry);
  }

  function handleForgotPassword() {
    navigation.navigate("forgotPassword");
  }

  useEffect(() => {
    const keyboardOpenListener = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpen(true)
    );
    const keyboardCloseListener = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpen(false)
    );
  });
  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        statusBarTranslucent={true}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <ModalView>
            <XCircle size={82} color={colors.primaryRed.main} weight="fill" />
            <TitleModal>Senha ou CPF incorretos.</TitleModal>
          </ModalView>
        </TouchableWithoutFeedback>
      </Modal>

      <Header>
        <Image source={require("../../../assets/Logotipo.png")} />
        <Image source={require("../../../assets/Logo.png")} />
      </Header>

      {!isKeyboardOpen && (
        <Title>
          <TitleFirstWord>Entregador, {"\n"}</TitleFirstWord>
          você é nosso maior valor
        </Title>
      )}
      <Text>Faça seu login para{"\n"}começar suas entregas.</Text>
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
        <Link onPress={handleForgotPassword}>
          <Text>Esqueci minha senha</Text>
        </Link>
      </ViewEndForm>
      <Button title={"Entrar"} onPress={toggleModal} />
    </Container>
  );
}
