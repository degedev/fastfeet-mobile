import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export type ButtonProps = TouchableOpacityProps;

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 56px;
  margin: 8px 0;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primaryYellow.main};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body.medium};
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  color: ${({ theme }) => theme.colors.primaryBlue.dark};
`;
