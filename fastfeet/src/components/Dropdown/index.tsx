import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Container,
  Input,
  ViewDropdown,
  DropdownItem,
  DropdownList,
  ViewIcon,
  ViewInput,
} from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type DropdownTextInputProps = {
  dataFilter: string[];
};

export function DropdownTextInput({ dataFilter }: DropdownTextInputProps) {
  const { colors } = useTheme();
  const [query, setQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dataSearch, setDataSearch] = useState([""]);
  const [data, setData] = useState(dataFilter);

  const handleInputChange = (text: string): void => {
    setQuery(text);
    if (data !== undefined) {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setDataSearch(filteredData);
      setDropdownVisible(filteredData.length > 0);
    }
  };

  const selectItem = (item: string): void => {
    setQuery(item);
    setDropdownVisible(false);
  };

  return (
    <Container>
      <ViewDropdown>
        <ViewInput>
          <Input
            placeholder={"Filtrar por bairro"}
            value={query}
            onChangeText={handleInputChange}
          />
          <ViewIcon>
            <MagnifyingGlass size={24} color={colors.gray.dark} />
          </ViewIcon>
        </ViewInput>
        {dropdownVisible && (
          <DropdownList
            data={dataSearch}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <DropdownItem onPress={() => selectItem(item)}>
                <Text>{item}</Text>
              </DropdownItem>
            )}
          />
        )}
      </ViewDropdown>
    </Container>
  );
}
