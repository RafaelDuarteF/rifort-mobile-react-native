import React from 'react';
import { TextInputProps } from 'react-native';

import { InputP, Container, SetaIcon } from './style';

interface InputProps extends TextInputProps {
    width: string;
    icon: boolean;
    onIconClick?: () => void;
}

export default function Input({width, icon, onIconClick, placeholder, onChangeText} : InputProps) {
    return(
        <Container width={width}>
            <InputP  placeholder={placeholder} onChangeText={onChangeText} placeholderTextColor={'#3d3d3d'} />
            { icon ? <SetaIcon onPress={onIconClick} name="arrow-forward-circle-outline" size={30} color="#000" /> : null}
        </Container>
    );
}