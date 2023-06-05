import React from "react";
import { ViewScreen, TextInitial, ImageLogo } from "./style";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import Button from "../../components/general/button/Button";
import Triangle from "../../components/initial/triangle/Triangle";

export default function InicialScreen() {

    const navigation = useNavigation();

    function handleRedirectApplication() {
        navigation.navigate('Application');
    }
    function handleRedirectProjeto() {
        navigation.navigate('Projeto');
    }

    return (
        <ViewScreen>
            <Triangle type="top" />
            <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')} />
            <TextInitial>Bem Vindo!</TextInitial>
            <Button onPress={handleRedirectApplication} title="Entrar" width="50%" />
            <Button onPress={handleRedirectProjeto} title="Sobre a RIFORT" width="45%" style={{backgroundColor: 'gainsboro', height: RFValue(40)}} />
            <Triangle type="bottom" />
        </ViewScreen>
    );
};