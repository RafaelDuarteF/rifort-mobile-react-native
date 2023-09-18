import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { ProjetoContainer, InfosProjetoContainer, TitleProjeto, TextProjeto, TextSite, TextLink } from "./style";
import Triangle from "../../components/initial/triangle/Triangle";
import theme from "../../theme";
import Button from "../../components/general/button/Button";

export default function ProjetoScreen({ navigation } : any) {

    function handleRedirectApplication() {
        navigation.navigate('Application');
    }
    function handleRedirectInitial() {
        navigation.navigate('Initial');
    }
    function handleRedirectSite() {
        const url = 'http://192.168.0.109:8000'; 
        Linking.openURL(url);
    }

    return(
        <ProjetoContainer>
            <Triangle type="top" color={theme.thirdColor} />
            <InfosProjetoContainer>
                <TitleProjeto>Sobre a RIFORT</TitleProjeto>
                <TextProjeto>
                    Nosso projeto consiste em realizar a contagem de passageiros através de sensores, conseguindo
                     a informação precisa sobre a lotação do transporte.
                 </TextProjeto>
                 <TextSite>
                    Para mais informações, acesse nosso site
                 </TextSite>
                 <TouchableOpacity onPress={handleRedirectSite}>
                    <TextLink>
                        Clicando aqui
                    </TextLink>
                 </TouchableOpacity>
                 <Button title="Aplicação" onPress={handleRedirectApplication} width="60%" />
                 <Button onPress={handleRedirectInitial} title="Voltar" width="45%" style={{backgroundColor: 'gainsboro', height: RFValue(40)}} />
            </InfosProjetoContainer>
            <Triangle type="bottom" color={theme.thirdColor} />
        </ProjetoContainer>
    );
}