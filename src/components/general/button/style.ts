import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
    width: string
}

export const ButtonP = styled.TouchableOpacity<ButtonProps>`
    width: ${({width}) => width};
    background-color: ${({theme}) => theme.primaryColor};
    height: ${RFValue(50)}px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
export const TextButtonP = styled.Text`
    color: ${({ theme }) => theme.backgroundColor};
    font-size: ${RFValue(18)}px;
    font-family: 'Roboto-BlackItalic';
`;