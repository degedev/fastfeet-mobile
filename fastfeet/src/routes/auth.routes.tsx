import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { View, StyleSheet } from "react-native";
import theme from "../theme";
import { Deliverie } from "../screens/Deliverie";
import { Details } from "../screens/Details";

type AuthRoutes = {
  deliverie: undefined;
  details: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="details" component={Details} />
        <Screen name="deliverie" component={Deliverie} />
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
