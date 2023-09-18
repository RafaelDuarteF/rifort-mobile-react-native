import styled from "styled-components/native";

interface InputProps {
    width: string;
    height: string;
}

export const Container = styled.View<InputProps>`
    width: ${({ width }) => width};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputC = styled.TextInput`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: black;
`;
