import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { ProjetoContainer, InfosProjetoContainer, TitleProjeto, TextProjeto } from "./style";
import Triangle from "../../components/initial/triangle/Triangle";
import theme from "../../theme";
import Button from "../../components/general/button/Button";

export default function ProjetoScreen() {

    const navigation = useNavigation();

    function handleRedirectApplication() {
        navigation.navigate('Application');
    }
    function handleRedirectInitial() {
        navigation.navigate('Initial');
    }

    return(
        <ProjetoContainer>
            <Triangle type="top" color={theme.thirdColor} />
            <InfosProjetoContainer>
                <TitleProjeto>Sobre a RIFORT</TitleProjeto>
                <TextProjeto>
                    Nosso projeto consiste em realizar a contagem de passageiros através de um
                    sensor, usando uma tecnologia que é capaz de saber se o ônibus desejado está com
                    uma capacidade cheia, média ou vazia. O sensor é um dispositivo capaz de detectar
                    ações de fenômeno físico com interações de um meio, seja pela temperatura, luz
                    ou impedância elétrica, e ele transmitirá um sinal para o dispositivo de controle
                    do nosso projeto. Trazendo um conforto e segurança para aqueles que necessitam
                    do transporte público.
                 </TextProjeto>
                 <Button title="Ir para a aplicação" onPress={handleRedirectApplication} width="60%" />
                 <Button onPress={handleRedirectInitial} title="Voltar" width="45%" style={{backgroundColor: 'gainsboro', height: RFValue(40)}} />
            </InfosProjetoContainer>
            <Triangle type="bottom" color={theme.thirdColor} />
        </ProjetoContainer>
    );
}