import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

import { 
    ViewScreen, 
    PartApplicationContainer, 
    ImageFundo, 
    TextInitialApplication, 
    ImageLogo,
    NivelLotacaoContainer,
    ScrollContainer,
    ChegadasContainer,
    TextMensagemRetorno
} from "./style";

import NivelLotacao from '../../components/application/nivelLotacao/NivelLotacao';
import Input from '../../components/general/input/Input';
import Chegadas from '../../components/application/chegadas/Chegadas';

export default function ApplicationScreen() {

    const [exibirChegadas, setExibirChegadas] = useState(false);
    const [linhaRetornada, setLinhaRetornada] = useState('');
    const [mensagemRetorno, setMensagemRetorno] = useState('');
    const [chegadas, setChegadas] = useState({});
    const [linha, setLinha] = useState('')
    const [parada, setParada] = useState('')

    function handleSetLinhaRetornada(value : string) {
        setLinhaRetornada(value);
    }
    
    function handleSetMensagemRetorno(value : string) {
        setMensagemRetorno(value);
    }

    function handleSetParada(value : string) {
        setParada(value);
    }

    function handleSetLinha(value : string) {
        setLinha(value);
    }

    function handleExibirOnibus() {
        handleVerificarChegadas();
    }

    function handleVerificarChegadas() {
        const linhaIn = linha;
        const paradaIn = parada;

        axios.get('http://192.168.0.106:8000/api/aplicacao/verificarChegadas', { params: { linha: linhaIn, parada: paradaIn } })
            .then(response => {
                exibir(response.data);
            })
            .catch(error => {
                handleSetMensagemRetorno('Erro ao se comunicar.');
            });

        const exibir = (res) => { 
            const linha = res?.['linha']?.['tp'] ?? false;
            if(!linha) {
                handleSetMensagemRetorno('Linha informada inválida');
            } else {
                const chegada1 = res?.chegada?.vs?.[0]?.t ?? false;
                const chegada2 = res?.chegada?.vs?.[1]?.t ?? false;
                const linhaOnibus = 'Linha - ' + res['linha']['lt'] + ' ' + linha;
                if(!chegada1) {
                    handleSetMensagemRetorno('Não há ônibus na linha e parada informados previstos.');
                }
                else {
                    handleSetLinhaRetornada(linhaOnibus);
                    setChegadas({
                        chegada1: chegada1 ?? null,
                        chegada2: chegada2 ?? null,
                    });
                }
            }
        }
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
                    <Input value={linha} onChangeText={handleSetLinha} icon={false} width='90%' placeholder="Linha" />
                    <Input value={parada} onChangeText={handleSetParada} icon={true} onIconClick={handleExibirOnibus} width='90%' placeholder="Parada" />
                    <NivelLotacaoContainer>
                        <NivelLotacao cor="red" title="Lotada"/>
                        <NivelLotacao cor="orange" title="Intermediária" />
                        <NivelLotacao cor="green" title="Vazia" />
                    </NivelLotacaoContainer>
                </PartApplicationContainer>
                {exibirChegadas &&
                    <ScrollContainer>
                        {mensagemRetorno && 
                            <TextMensagemRetorno>{mensagemRetorno}</TextMensagemRetorno>
                        } 
                        {linhaRetornada &&       
                            <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={true} scrollEnabled={true}>
                                <ChegadasContainer>
                                    <Chegadas/>
                                    <Chegadas/>
                                </ChegadasContainer>
                            </ScrollView>
                        }
                    </ScrollContainer>
                }
            </ViewScreen>
        </KeyboardAwareScrollView>
    );
}