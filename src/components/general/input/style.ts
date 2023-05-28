import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

interface InputProps {
    width: string,
}

export const Container = styled.View<InputProps>`
    width: ${({width}) => width};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputP = styled.TextInput`
    width: 100%;
    padding: 10px 20px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.thirdColor};
    margin: 10px;
    color: black;
`;

export const SetaIcon = styled(Icon)`
    position: absolute;
    right: 0;
    margin-right: 5px;
`;