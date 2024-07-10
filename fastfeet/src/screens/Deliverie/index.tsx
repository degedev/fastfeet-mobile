import {
  ButtonTab,
  ButtonText,
  Container,
  ContainerBody,
  ContainerButtons,
  Text,
  Title,
  ViewLocation,
  ViewUser,
  AnimatedHeader,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MapPin, SignOut } from "phosphor-react-native";
import { CardDeliverie } from "../../components/CardDeliverie";
import { TextCount } from "../../components/CardDeliverie/styles";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { DropdownTextInput } from "../../components/Dropdown";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export function Deliverie() {
  const { colors } = useTheme();
  const [pendingDeliveries, setPendingDeliveries] = useState(true);

  const scrollY = useSharedValue(0);
  const options = ["Option 1", "Option 2", "Option 3"];

  const navigation = useNavigation();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 200], [200, 150]);
    return {
      height,
      justifyContent: "flex-end",
    };
  });

  const animatedUserStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 100], [1, 0]);
    const display = opacity === 0 ? "none" : "flex";
    return {
      opacity,
      display,
    };
  });

  return (
    <Container>
      <AnimatedHeader style={animatedHeaderStyle}>
        <ViewUser style={animatedUserStyle}>
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

        <ViewUser>
          <Title>Entregas</Title>
          <ViewLocation>
            <MapPin size={24} color={colors.primaryYellow.main} weight="fill" />
            <Text>Londrina</Text>
          </ViewLocation>
        </ViewUser>
      </AnimatedHeader>

      <ContainerBody>
        <DropdownTextInput dataFilter={options} />
        <TextCount>8 entregas</TextCount>
        <Animated.ScrollView
          onScroll={scrollHandler}
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
            title={"Pacote 3"}
            date={"01/07/2024"}
            status={"retirado"}
          />
          <CardDeliverie
            title={"Pacote 4"}
            date={"01/07/2024"}
            status={"retirado"}
          />
        </Animated.ScrollView>
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
