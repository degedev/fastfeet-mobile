import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const TitleModal = styled.Text`
  color: #ffffff;
  font-size: ${theme.fontSizes.extraExtraLarge}px;
  font-family: ${theme.fonts.higlight.main};
`;
export const TextModal = styled.Text`
  color: #ffffff;
  font-size: ${theme.fontSizes.small}px;
  font-family: ${theme.fonts.body.regular};
`;

export const ContainerHeader = styled.View`
  height: 20%;
  background-color: ${theme.colors.primaryBlue.main};
  padding: 32px;
`;

export const ViewTitle = styled.View`
  margin: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  flex: 2;
  text-align: center;
  color: #ffffff;
  font-size: ${theme.fontSizes.extraExtraLarge}px;
  font-family: ${theme.fonts.higlight.main};
`;

export const ViewInput = styled.View`
  margin: -55px 0 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerBody = styled.View`
  flex: 1;
  gap: 16px;
  align-items: center;
  background-color: ${theme.colors.gray.lightest};
  padding: 32px;
`;
export const ContentData = styled.View`
  margin-top: -56px;
  width: 100%;
  border-radius: 4px;
  padding: 24px;
  align-items: flex-start;
  background-color: ${theme.colors.white};
`;
export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  margin-left: 8px;
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.extraLarge}px;
  font-family: ${theme.fonts.higlight.main};
`;
export const Subtitle = styled.Text`
  margin: 8px 0;
  color: ${theme.colors.primaryBlue.dark};
  font-size: ${theme.fontSizes.extraSmall}px;
  font-family: ${theme.fonts.body.bold};
`;

export const ContentStatus = styled.View`
  width: 100%;
  border-radius: 4px;
  padding: 24px;
  align-items: flex-start;
  background-color: ${theme.colors.white};
`;

export const ContentStatusItem = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentStatusData = styled.View``;

export const Text = styled.Text`
  line-height: 24px;
  color: ${theme.colors.gray.dark};
  font-size: ${theme.fontSizes.medium}px;
  font-family: ${theme.fonts.body.regular};
`;

export const ContainerCards = styled.ScrollView`
  flex: 1;
`;

export const ContainerButtons = styled.View`
  padding: 32px;
`;
