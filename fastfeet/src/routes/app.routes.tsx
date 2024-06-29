import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { ForgotPassword } from "../screens/ForgotPassword";

type AppRoutes = {
  home: undefined;
  forgotPassword: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
