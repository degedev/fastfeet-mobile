import {
  Container,
  ContainerBody,
  ContainerButtons,
  ContainerHeader,
  ContentData,
  ContentStatus,
  Subtitle,
  Title,
  Text,
  TitleHeader,
  ViewTitle,
  ContentStatusData,
  ContentStatusItem,
  ContentHeader,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { useState } from "react";
import { ArrowLeft, ClipboardText, WarningCircle } from "phosphor-react-native";

export function Details() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerHeader>
        <ViewTitle>
          <ArrowLeft size={22} color={colors.white} weight="fill" />
          <Title>Detalhes</Title>
        </ViewTitle>
      </ContainerHeader>
      <ContainerBody>
        <ContentData>
          <ContentHeader>
            <ClipboardText
              size={24}
              color={colors.primaryYellow.main}
              weight="fill"
            />
            <TitleHeader>Dados</TitleHeader>
          </ContentHeader>
          <Subtitle>DESTINATÁRIO</Subtitle>
          <Text>Icaro Pereira</Text>
          <Subtitle>ENDEREÇO</Subtitle>
          <Text>Rua Guilherme Gemballa, 260</Text>
          <Text>Jardim América, SC</Text>
          <Text>89 168-000</Text>
        </ContentData>
        <ContentStatus>
          <ContentHeader>
            <WarningCircle
              size={22}
              color={colors.primaryYellow.main}
              weight="fill"
            />
            <TitleHeader>Situação</TitleHeader>
          </ContentHeader>
          <ContentStatusItem>
            <ContentStatusData>
              <Subtitle>STATUS</Subtitle>
              <Text>Aguardando</Text>
            </ContentStatusData>
            <ContentStatusData>
              <Subtitle>POSTADO EM</Subtitle>
              <Text>01/07/2024</Text>
            </ContentStatusData>
          </ContentStatusItem>
          <ContentStatusItem>
            <ContentStatusData>
              <Subtitle>DATA DE RETIRADA</Subtitle>
              <Text>--/--/----</Text>
            </ContentStatusData>
            <ContentStatusData>
              <Subtitle>DATA DE ENTREGA</Subtitle>
              <Text>--/--/----</Text>
            </ContentStatusData>
          </ContentStatusItem>
        </ContentStatus>
      </ContainerBody>
      <ContainerButtons>
        <Button title="Retirar Pacote" />
      </ContainerButtons>
    </Container>
  );
}
