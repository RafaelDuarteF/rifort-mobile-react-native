import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ProjetoContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColor};
`;
export const InfosProjetoContainer = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    justify-content: center;
`;
export const TitleProjeto = styled.Text`
    color: ${({ theme }) => theme.thirdColor};
    font-size: ${RFValue(30)}px;
    text-align: center;
    font-family: 'Roboto-Bold';
`;
export const TextProjeto = styled.Text`
    color: ${({ theme }) => theme.thirdColor};
    margin-top: ${RFValue(40)}px;
    font-size: ${RFValue(16)}px;
    margin-bottom: ${RFValue(20)}px;
    font-family: 'Roboto-Light';
    text-align: center;
`;
export const TextSite = styled.Text`
    color: ${({ theme }) => theme.thirdColor};
    font-size: ${RFValue(16)}px;
    font-family: 'Roboto-Light';
    text-align: center;
`;
export const TextLink = styled.Text`
    color: ${({ theme }) => theme.primaryColor};
    font-weight: bold;
    font-size: ${RFValue(18)}px;
    margin-bottom: 10px;
`;