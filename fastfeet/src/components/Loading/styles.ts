import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type ButtonProps = TouchableOpacityProps;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primaryBlue.main};
`;
