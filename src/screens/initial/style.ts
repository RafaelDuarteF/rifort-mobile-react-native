import React from "react";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const ViewScreen = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
`;
export const TextInitial = styled.Text`
    color: ${({ theme }) => theme.thirdColor};
    font-size: ${RFValue(16)}px;
    font-family: 'Roboto-Thin';
`;
export const ImageLogo = styled.Image`
    width: 70%;
    height: 10%;
`;