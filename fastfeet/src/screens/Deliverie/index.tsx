import {
  ButtonTab,
  ButtonText,
  Container,
  ContainerBody,
  ContainerButtons,
  ContainerCards,
  ContainerHeader,
  Text,
  Title,
  ViewLocation,
  ViewUser,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MapPin, SignOut } from "phosphor-react-native";
import { CardDeliverie } from "../../components/CardDeliverie";
import { TextCount } from "../../components/CardDeliverie/styles";
import { Keyboard, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { DropdownTextInput } from "../../components/Dropdown";

export function Deliverie() {
  const { colors } = useTheme();
  const [isScrolled, setIsScrolled] = useState(true);
  const [pendingDeliveries, setPendingDeliveries] = useState(true);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];
  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  const navigation = useNavigation();

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { y: any } };
  }) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setIsScrolled(yOffset === 0);
  };

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
      <ContainerHeader active={isScrolled} keybordActive={isKeyboardOpen}>
        {isScrolled && (
          <ViewUser>
            <Text>
              Bem vindo, {"\n"}
              João Silva
            </Text>
            <TouchableOpacity>
              <SignOut
                size={24}
                color={colors.primaryYellow.main}
                weight="fill"
              />
            </TouchableOpacity>
          </ViewUser>
        )}
        <ViewUser>
          <Title>Entregas</Title>
          <ViewLocation>
            <MapPin size={24} color={colors.primaryYellow.main} weight="fill" />
            <Text>Londrina</Text>
          </ViewLocation>
        </ViewUser>
      </ContainerHeader>
      <ContainerBody active={isScrolled}>
        <DropdownTextInput dataFilter={options} />
        <TextCount>8 entregas</TextCount>
        <ContainerCards
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
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
        <ButtonTab active={pendingDeliveries}>
          <ButtonText
            active={pendingDeliveries}
            onPress={() => setPendingDeliveries(true)}
          >
            Pendentes
          </ButtonText>
        </ButtonTab>
        <ButtonTab active={!pendingDeliveries}>
          <ButtonText
            active={!pendingDeliveries}
            onPress={() => setPendingDeliveries(false)}
          >
            Feitas
          </ButtonText>
        </ButtonTab>
      </ContainerButtons>
    </Container>
  );
}
