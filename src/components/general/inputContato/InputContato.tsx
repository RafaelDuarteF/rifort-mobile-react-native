import React from 'react';
import { TextInputProps } from 'react-native';

import { InputC, Container } from './style';

interface InputProps extends TextInputProps {
    width: string;
    height: string;
    onChangeText?: any
}

export default function InputContato({ width, placeholder, height, onChangeText, value = ''}: InputProps) {
    return (
        <Container width={width} height={height}>
            <InputC onChangeText={onChangeText} value={value} multiline placeholder={placeholder} placeholderTextColor={'#3d3d3d'} />
        </Container>
    );
}