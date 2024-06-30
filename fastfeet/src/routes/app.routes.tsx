import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { ForgotPassword } from "../screens/ForgotPassword";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

type AppRoutes = {
  home: undefined;
  forgotPassword: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="forgotPassword" component={ForgotPassword} />
      </Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryBlue.main,
  },
});
