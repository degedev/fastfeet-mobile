import {
  ButtonTab,
  ButtonText,
  Container,
  ContainerBody,
  ContainerButtons,
  ContainerCards,
  ContainerHeader,
  Input,
  Text,
  Title,
  ViewIcon,
  ViewInput,
  ViewLocation,
  ViewUser,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlass, MapPin, SignOut } from "phosphor-react-native";
import { CardDeliverie } from "../../components/CardDeliverie";
import { TextCount } from "../../components/CardDeliverie/styles";
import { Button, Image } from "react-native";

export function Deliverie() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleHome() {
    navigation.goBack();
  }

  return (
    <Container>
      <ContainerHeader>
        <ViewUser>
          <Text>
            Bem vindo, {"\n"}
            João Silva
          </Text>
          <SignOut size={24} color={colors.primaryYellow.main} weight="fill" />
        </ViewUser>
        <ViewUser>
          <Title>Entregas</Title>
          <ViewLocation>
            <MapPin size={24} color={colors.primaryYellow.main} weight="fill" />
            <Text>Londrina</Text>
          </ViewLocation>
        </ViewUser>
      </ContainerHeader>
      <ContainerBody>
        <ViewInput>
          <Input />
          <ViewIcon>
            <MagnifyingGlass size={24} color="#080808" />
          </ViewIcon>
        </ViewInput>
        <TextCount>8 entregas</TextCount>
        <ContainerCards showsVerticalScrollIndicator={false}>
          <CardDeliverie
            title={"Pacote 1"}
            date={"01/07/2024"}
            status={"retirado"}
          />
          <CardDeliverie
            title={"Pacote 2"}
            date={"01/07/2024"}
            status={"retirado"}
          />

          <CardDeliverie
            title={"Pacote 2"}
            date={"01/07/2024"}
            status={"retirado"}
          />
        </ContainerCards>
      </ContainerBody>

      <ContainerButtons>
        <ButtonTab active={true}>
          <ButtonText active={true}>Pendentes</ButtonText>
        </ButtonTab>
        <ButtonTab active={false}>
          <ButtonText active={false}>Feitas</ButtonText>
        </ButtonTab>
      </ContainerButtons>
    </Container>
  );
}
