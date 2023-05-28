import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { 
    ViewScreen, 
    PartApplicationContainer, 
    ImageFundo, 
    TextInitialApplication, 
    ImageLogo,
    NivelLotacaoContainer,
    ScrollContainer,
    ChegadasContainer
} from "./style";

import NivelLotacao from '../../components/application/nivelLotacao/NivelLotacao';
import Input from '../../components/general/input/Input';
import Chegadas from '../../components/application/chegadas/Chegadas';

export default function ApplicationScreen() {

    const [exibirChegadas, setExibirChegadas] = useState(false);
    const [chegadas, setChegadas] = useState([]);

    function handleExibirOnibus() {
        setExibirChegadas(true);
    }

    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ViewScreen>
                <PartApplicationContainer>
                    <ImageFundo resizeMode="contain" source={require('../../../assets/images/onibus.jpg')} />
                    <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')} />
                    <TextInitialApplication>Informe a linha e a parada</TextInitialApplication>
                </PartApplicationContainer>
                <PartApplicationContainer border={true}>
                    <Input icon={false} width='90%' placeholder="Linha" />
                    <Input icon={true} onIconClick={handleExibirOnibus} width='90%' placeholder="Parada" />
                    <NivelLotacaoContainer>
                        <NivelLotacao cor="red" title="Lotada"/>
                        <NivelLotacao cor="orange" title="Intermediária" />
                        <NivelLotacao cor="green" title="Vazia" />
                    </NivelLotacaoContainer>
                </PartApplicationContainer>
                {exibirChegadas &&
                    <ScrollContainer>
                        <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={true} scrollEnabled={true}>
                            <ChegadasContainer>
                                <Chegadas />
                                <Chegadas />
                            </ChegadasContainer>
                        </ScrollView>
                    </ScrollContainer>
                }
            </ViewScreen>
        </KeyboardAwareScrollView>
    );
}