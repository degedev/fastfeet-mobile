import styled from "styled-components/native";

type CheckboxProps = {
  active: boolean;
};

export const Container = styled.View`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border-width: 6px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.primaryYellow.main : "white"};
`;

export const CheckboxLabel = styled.Text<CheckboxProps>`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  font-family: ${({ theme }) => theme.fonts.body.regular};
  color: ${({ theme, active }) =>
    active ? theme.colors.primaryYellow.main : theme.colors.gray.light};
`;
