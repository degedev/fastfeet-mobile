import styled from "styled-components/native";
import theme from "../../theme";

type ScrollProps = {
  active: boolean;
  keybordActive?: boolean;
};
type ButtonProps = {
  active: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;
export const ContainerHeader = styled.View<ScrollProps>`
  flex: ${({ keybordActive }) => (keybordActive ? 5 : 1)};
  background-color: ${theme.colors.primaryBlue.main};
  padding: 32px;
`;

export const ViewUser = styled.View`
  margin: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewLocation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: ${theme.fontSizes.extraExtraLarge}px;
  font-family: ${theme.fonts.higlight.main};
`;

export const ContainerBody = styled.View<ScrollProps>`
  flex: ${({ active }) => (active ? 3 : 6)};
  align-items: center;
  background-color: ${theme.colors.gray.lightest};
  padding: 32px;
`;

export const Text = styled.Text`
  line-height: 24px;
  color: ${theme.colors.gray.light};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;

export const ContainerCards = styled.ScrollView`
  flex: 1;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
`;

export const ButtonTab = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  height: 56px;
  border-top-width: ${({ active }) => (active ? 3 : 1)}px;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.primaryYellow.main : theme.colors.gray.dark};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.gray.lightest};
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.primaryBlue.main : theme.colors.gray.dark};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.body.medium : theme.fonts.body.regular};
`;
