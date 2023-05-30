import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface CorProps {
    cor: string,
}

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const CorLotacao = styled.View<CorProps>`
    height: ${RFValue(10)}px;
    width: ${RFValue(45)}px;
    border-radius: 8px;
    background-color: ${({ cor }) => cor};
`;

export const TextLotacao = styled.Text`
    color: ${({theme}) => theme.thirdColor};
    font-family: 'Roboto-Thin';
    width: 100%;
    font-size: ${RFValue(15)}px;
`;