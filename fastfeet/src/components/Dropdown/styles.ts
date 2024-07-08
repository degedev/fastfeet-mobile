import styled from "styled-components/native";
import theme from "../../theme";
import { FlatList } from "react-native";

export const Container = styled.View`
  width: 100%;
  z-index: 1;
`;

export const ViewDropdown = styled.View`
  flex: 1;
  position: relative;
  background-color: ${theme.colors.white};
`;

export const DropdownList = styled.FlatList`
  flex: 1;
  position: absolute;
  width: 100%;
  border-radius: 0 0 4px 4px;
  background-color: ${theme.colors.white};
`;

export const DropdownItem = styled.TouchableOpacity`
  height: 55px;
  padding: 12px;
  border: 1px ${theme.colors.gray.lightest};
  background-color: ${theme.colors.white};
  z-index: 1;
`;

export const ViewInput = styled.View`
  margin: -45px 0 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewIcon = styled.View`
  position: absolute;
  right: 10px;
  z-index: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  padding: 0 18px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
`;

export const Text = styled.Text`
  line-height: 24px;
  color: ${theme.colors.gray.light};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;
