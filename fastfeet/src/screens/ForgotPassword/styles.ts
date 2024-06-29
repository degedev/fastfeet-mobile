import styled from "styled-components/native";
import theme from "../../theme";
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primaryBlue.main};
  padding: 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 36px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  color: #ffffff;
  font-size: ${theme.fontSizes.gigantic}px;
  font-family: ${theme.fonts.higlight.alternative};
`;

export const TitleFirstWord = styled(Title)`
  color: ${theme.colors.primaryYellow.main};
`;

export const Subtitle = styled.Text`
  margin-top: 24px;
  color: #ffffff;
  font-size: ${theme.fontSizes.extraSmall}px;
  font-family: ${theme.fonts.body.bold};
`;

export const Text = styled.Text`
  flex: 1;
  margin: 12px 0 24px 0;
  line-height: 24px;
  color: ${theme.colors.gray.light};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;

export const Arrow = styled.Text`
  margin-vertical: 24px;
  color: ${theme.colors.gray.light};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;

export const LinkText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.large}px;
  font-family: ${theme.fonts.body.medium};
`;

export const LinkView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.Text`
  color: ${theme.colors.primaryYellow.main};
  margin-left: -4px;
  font-size: 18px;
  line-height: 6px;
`;

export const Link = styled.TouchableOpacity``;

export const ViewFooter = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
