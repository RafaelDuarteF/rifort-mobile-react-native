import React from 'react';
import { TextInputProps } from 'react-native';

import { InputC, Container } from './style';

interface InputProps extends TextInputProps {
    width: string;
    height: string;
}

export default function InputContato({ width, placeholder, height }: InputProps) {
    return (
        <Container width={width} height={height}>
            <InputC multiline placeholder={placeholder} placeholderTextColor={'#3d3d3d'} />
        </Container>
    );
}