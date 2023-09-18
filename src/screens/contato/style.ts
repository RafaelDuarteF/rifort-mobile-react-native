import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const ViewContato = styled.View`
    width: 100%;
    height: ${windowHeight}px;
    background: ${({theme}) => theme.backgroundColor};
`;
export const ViewTextContato = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.primaryColor};
`;
export const TextContato = styled.Text`
    width: 90%;
    text-align: center;
    font-family: 'Roboto-Light';
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.thirdColor};
`;
export const ViewFormContato = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
    margin-top: ${RFValue(20)}px;
`;
export const TitleCampo = styled.Text`
    font-family: 'Roboto-Light';
    font-size: ${RFValue(19)}px;
    margin-top: 20px;
    color: white;
`;
export const ButtonEnviar = styled.TouchableOpacity`
    width: 43%;
    background-color: ${({theme}) => theme.thirdColor};
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;
export const ButtonCancelar = styled.TouchableOpacity`
    width: 43%;
    background-color: darkred;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;
export const TextButtonEnviar = styled.Text`
    color: ${({theme}) => theme.backgroundColor};
    font-size: ${RFValue(18)}px;
    font-family: 'Roboto';
`;
export const Buttons = styled.View`
    flex-direction: row;
    height: 10%;
    width: 100%;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 20px;
`;
export const TextButtonCancelar = styled.Text`
    color: white;
    font-size: ${RFValue(18)}px;
    font-family: 'Roboto';
`;