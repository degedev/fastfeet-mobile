import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  margin: 8px 0 8px 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.extraLarge}px;
  font-family: ${theme.fonts.higlight.main};
`;

export const Date = styled.Text`
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;
export const Text = styled.Text`
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.medium};
`;

export const TextCount = styled.Text`
  margin: 8px 0 12px 0;
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;
export const TextStatus = styled.Text`
  color: ${theme.colors.primaryGreen.main};
  font-size: ${theme.fontSizes.extraSmall}px;
  font-family: ${theme.fonts.body.bold};
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = styled.View`
  height: 46px;
  padding: 0 24px 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primaryYellow.light};
`;
