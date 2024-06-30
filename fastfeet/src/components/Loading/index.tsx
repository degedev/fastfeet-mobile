import { TouchableOpacityProps, Image } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { IconProps } from "phosphor-react-native";
import { Container } from "./styles";

export function Loading() {
  const scale = useSharedValue(0.5);

  scale.value = withRepeat(
    withSequence(
      withTiming(0, { duration: 800 }),
      withTiming(2, { duration: 800 })
    ),
    -1,
    true
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Container>
      <Animated.View style={animatedStyle}>
        <Image source={require("../../../assets/Logotipo.png")} />
      </Animated.View>
    </Container>
  );
}
