import {
  Container,
  ContainerButtons,
  ContainerHeader,
  Title,
  Text,
  ViewTitle,
  ModalView,
  TitleModal,
  TextModal,
  ContainerBody,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { useState } from "react";
import { ArrowLeft, CameraRotate } from "phosphor-react-native";
import {
  Modal,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export function ConfirmDelivery() {
  const { colors } = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

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
            <Image source={require("../../../assets/PackageCheck.png")} />
            <TitleModal>Foto enviada!</TitleModal>
            <TextModal>Pacote entregue.</TextModal>
          </ModalView>
        </TouchableWithoutFeedback>
      </Modal>
      <ContainerHeader>
        <ViewTitle>
          <ArrowLeft size={22} color={colors.white} weight="fill" />
          <Title>Confirmar</Title>
        </ViewTitle>
      </ContainerHeader>
      {!permission.granted ? (
        <ContainerBody>
          <Text>
            É necessário dar permissão para podermos usar sua camera para
            registra a entrega
          </Text>
          <Button onPress={requestPermission} title="Permitir" />
        </ContainerBody>
      ) : (
        <>
          <CameraView style={styles.camera} facing={facing}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <CameraRotate size={48} color={colors.white} weight="duotone" />
            </TouchableOpacity>
          </CameraView>
          <ContainerButtons>
            <Button title="Enviar foto" onPress={toggleModal} />
          </ContainerButtons>
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    marginTop: -24,
    margin: 24,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    margin: 12,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});
