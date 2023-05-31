import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

// Calcula a altura correspondente a 33% da tela em pixels
const height33Percent = windowHeight * 0.33;

interface LinhaColorProps {
  cor: string
}

export const Chegada = styled.View`
  width: ${windowWidth}px;
  height: ${height33Percent}px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.line500color};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Linha = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`;

export const LinhaImage = styled.Image`
  width: ${windowWidth * 0.19}px;
  aspect-ratio: 1; // Manter a proporção da imagem
`;

export const LinhaText = styled.Text`
  width: ${windowWidth * 0.50}px;
  height: auto;
  margin-left: ${windowWidth * 0.04}px;
  margin-right: ${windowWidth * 0.02}px;
  align-self: center;
  color: ${({ theme }) => theme.thirdColor};
  font-family: 'Roboto-Bold';
  font-size: ${RFValue(16)}px;
`;

export const LinhaColor = styled.View<LinhaColorProps>`
  width: ${windowWidth * 0.15}px;
  height: 10px;
  background-color: ${({ cor }) => cor ?? 'gray'};
  border-radius: 4px;
`;

export const LinhaInfos = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
export const InfosOnibus = styled.View`
    height: 60%;
    width: 100%;
    justify-content: center;
`;
export const InfosOnibusText = styled.Text`
    color: ${({theme}) => theme.thirdColor};
    font-family: 'Roboto-Thin';
    font-size: ${RFValue(16)}px;
`;