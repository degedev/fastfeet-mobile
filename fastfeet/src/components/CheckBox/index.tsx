import { useState } from "react";
import { Checkbox, CheckboxLabel, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { Check } from "phosphor-react-native";

type CheckboxProps = {
  title: string;
};

export function CheckBox({ title }: CheckboxProps) {
  const { colors } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function toggleCheckbox() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  }

  return (
    <Container>
      <Checkbox onPress={toggleCheckbox} active={isChecked}></Checkbox>
      <CheckboxLabel active={isChecked}>{title}</CheckboxLabel>
    </Container>
  );
}
