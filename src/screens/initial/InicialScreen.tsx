import React from "react";
import { ViewScreen, TextInitial, ImageLogo } from "./style";
import { RFValue } from "react-native-responsive-fontsize";

import Button from "../../components/general/button/Button";
import Triangle from "../../components/initial/triangle/Triangle";

export default function InicialScreen({ navigation } : any) {


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
            <Button onPress={handleRedirectProjeto} title="Sobre a RIFORT" width="60%" style={{backgroundColor: 'gainsboro', height: RFValue(40)}} />
            <Triangle type="bottom" />
        </ViewScreen>
    );
};