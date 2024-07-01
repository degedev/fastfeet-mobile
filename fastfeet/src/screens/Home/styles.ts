import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.ScrollView`
  background-color: ${theme.colors.primaryBlue.main};
  padding: 0 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 36px 0 28px 0;
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

export const Text = styled.Text`
  margin-vertical: 24px;
  line-height: 24px;
  color: ${theme.colors.gray.light};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 45px;
  padding: 0 8px 0 42px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const ViewIcon = styled.View`
  position: absolute;
  left: 10px;
  z-index: 1;
`;

export const ViewUser = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.TouchableOpacity``;

export const ButtonEye = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

export const ViewEndForm = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
