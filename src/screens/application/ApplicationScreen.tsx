import React, { useState } from 'react';
import { ScrollView, ActivityIndicator, Dimensions, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'styled-components/native';
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';

import {
    ViewScreen,
    PartApplicationContainer,
    ImageFundo,
    TextInitialApplication,
    ImageLogo,
    NivelLotacaoContainer,
    ScrollContainer,
    ChegadasContainer,
    TextMensagemRetorno,
    ImageTouchable,
    LinhaInput
} from "./style";

import NivelLotacao from '../../components/application/nivelLotacao/NivelLotacao';
import Input from '../../components/general/input/Input';
import Chegadas from '../../components/application/chegadas/Chegadas';

const windowHeight = Dimensions.get('window').height;

export default function ApplicationScreen({ navigation } : any) {

    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [exibirChegadas, setExibirChegadas] = useState(false);
    const [linhaRetornada, setLinhaRetornada] = useState('');
    const [mensagemRetorno, setMensagemRetorno] = useState('');
    const [chegadas, setChegadas] = useState({ chegada1: '', chegada2: '' });
    const [linha, setLinha] = useState('')
    const [parada, setParada] = useState('')
    const [numLinha, setNumLinha] = useState('');

    function handleRedirectInitial() {
        navigation.navigate('Initial');
    }

    function handleSetLinhaRetornada(value: string) {
        setLinhaRetornada(value);
    }

    function handleSetMensagemRetorno(value: string) {
        setMensagemRetorno(value);
    }

    function handleSetParada(value: string) {
        setParada(value);
    }

    function handleSetLinha(value: string) {
        setLinha(value);
    }

    function handleSetNumLinha(value: string) {
        setNumLinha(value);
    }

    function handleSetChegadas(value: string, value2: string) {
        setChegadas({
            chegada1: value,
            chegada2: value2,
        });
    }

    function handleExibirOnibus() {
        Keyboard.dismiss();
        setLoading(true)
        setExibirChegadas(false);
        handleSetMensagemRetorno('');
        handleSetChegadas('', '');
        handleSetLinhaRetornada('');
        handleVerificarChegadas();
    }

    function handleVerificarChegadas() {
        const linhaIn = linha;
        const paradaIn = parada;
        const numLinhaIn = numLinha;

        if (linhaIn === '' || paradaIn === '') {
            setLoading(false);
            setExibirChegadas(true);
            handleSetMensagemRetorno('Por favor, informe a linha e a parada.');
        } else {
            // Exibir o indicador de carregamento

            axios
                .get('http://192.168.0.107:8000/api/aplicacao/verificarChegadas', {
                    params: { linha: linhaIn, parada: paradaIn, numLinha: numLinhaIn },
                })
                .then(response => {
                    exibir(response.data);
                })
                .catch(error => {
                    setLoading(false);
                    setExibirChegadas(true);
                    handleSetMensagemRetorno('Erro ao se comunicar.');
            })
        }
    }

    function exibir(res: any) {
        if (res === 'empty') {
            setLoading(false);
            handleSetMensagemRetorno('Por favor, informe a linha e a parada.');
        } else if (res === 'invalid') {
            setLoading(false);
            handleSetMensagemRetorno('Linha ou parada informada são inválidas!');
        }
        else {
            const linha = res?.['linha']?.['nome'] ?? false;
            if (!linha) {
                setLoading(false);
                handleSetMensagemRetorno('Linha informada inválida');
            } else {
                const chegada1 = res?.chegada?.vs?.[0]?.t ?? false;
                const chegada2 = res?.chegada?.vs?.[1]?.t ?? false;
                const linhaOnibus = 'Linha - ' + res['linha']['num'] + ' ' + linha;
                if (!chegada1) {
                    setLoading(false);
                    handleSetMensagemRetorno('Não há informações de chegada da linha na parada informada.');
                }
                else {
                    setLoading(false);
                    handleSetLinhaRetornada(linhaOnibus);
                    handleSetMensagemRetorno('');
                    setChegadas({ chegada1, chegada2 })
                }
            }
        }
        setLoading(false);
        setExibirChegadas(true);
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ViewScreen>
                <PartApplicationContainer>
                    <ImageFundo resizeMode="cover" source={require('../../../assets/images/onibus.jpg')} />
                    <ImageTouchable onPress={handleRedirectInitial}>
                        <ImageLogo resizeMode="contain" source={require('../../../assets/images/logo.png')} />
                    </ImageTouchable>
                    <TextInitialApplication>Informe o número e sentido da linha e a parada.</TextInitialApplication>
                </PartApplicationContainer>
                <PartApplicationContainer border={true} style={{ paddingTop: RFValue(10) }}>
                    <LinhaInput>
                        <Input value={numLinha} onChangeText={handleSetNumLinha} icon={false} width='48%' placeholder="Número" />
                        <Input value={linha} onChangeText={handleSetLinha} icon={false} width='48%' placeholder="Sentido" />
                    </LinhaInput>
                    <Input value={parada} onChangeText={handleSetParada} icon={true} onIconClick={handleExibirOnibus} width='90%' placeholder="Parada" />
                    <NivelLotacaoContainer>
                        <NivelLotacao cor="red" title="Lotada" />
                        <NivelLotacao cor="orange" title="Intermediária" />
                        <NivelLotacao cor="green" title="Vazia" />
                    </NivelLotacaoContainer>
                </PartApplicationContainer>
                <PartApplicationContainer style={{ height: windowHeight * 0.34 }}>
                    {exibirChegadas &&
                        <ScrollContainer>
                            {linhaRetornada == '' && mensagemRetorno != '' && !loading &&
                                <TextMensagemRetorno>{mensagemRetorno}</TextMensagemRetorno>
                            }
                            {linhaRetornada != '' && mensagemRetorno == '' && !loading &&
                                <ScrollView indicatorStyle="white" showsVerticalScrollIndicator={true} scrollEnabled={true}>
                                    <ChegadasContainer>
                                        {chegadas.chegada1 !== '' &&
                                            <Chegadas linha={linhaRetornada} chegada={chegadas.chegada1} lotacaoMax={45} lotacaoAtual={30} />
                                        }
                                        {chegadas.chegada2 !== '' &&
                                            <Chegadas linha={linhaRetornada} chegada={chegadas.chegada2} lotacaoMax={45} lotacaoAtual={30} />
                                        }
                                    </ChegadasContainer>
                                </ScrollView>
                            }
                        </ScrollContainer>
                    }
                    {loading && (
                        <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color={theme.primaryColor} />
                    )}
                </PartApplicationContainer>
            </ViewScreen>
        </KeyboardAwareScrollView>
    );
}