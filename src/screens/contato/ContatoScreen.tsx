import InputContato from "../../components/general/inputContato/InputContato";
import { Alert } from "react-native";
import { useState } from "react";
import axios from "axios";
import { 
    ViewContato,
    ViewTextContato, 
    TextContato,
    ViewFormContato,
    TitleCampo,
    ButtonEnviar,
    TextButtonEnviar,
    ButtonCancelar,
    Buttons,
    TextButtonCancelar
} from "./style";

export default function ContatoScreen({navigation} : any) {

    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [mensagemVisible, setMensagemVisible] = useState(false);

    function handleMensagemVisible() {

        if(email === '' || assunto === '') {
            Alert.alert(
                'Preencha os campos!', 
                'Informe o seu E-Mail e o assunto do contato!',  
                [
                    { text: 'OK'}
                ],
                { cancelable: false }
            )
        } else {
            setMensagemVisible(true);
        }
    }

    function enviarContato() {
        if(mensagem === '') {
            Alert.alert(
                'Preencha os campos!', 
                'Informe a mensagem para contato!',  
                [
                    { text: 'OK'}
                ],
                { cancelable: false }
            )
        } else {
            axios.post('http://192.168.0.107:8000/api/enviarContato', {
                email: email, assunto: assunto, mensagem: mensagem
            }) 
            .then(response => {
                if(response) {
                    Alert.alert(
                        'Contato enviado!',
                        'O contato foi enviado com sucesso para o nosso suporte. Fique de olho no E-Mail informado pela resposta!',
                        [
                          { text: 'OK', onPress: () => handleReturnContato() }
                        ],
                        { cancelable: false }
                    );
                  
                } else {
                    Alert.alert(
                        'Ocorreu um erro!',
                        'Ocorreu um erro ao tentar enviar o contato, tente novamente.',
                        [
                          { text: 'OK', onPress: () => setMensagemVisible(false) }
                        ],
                        { cancelable: false }
                    );
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
    function handleReturnContato() {
        setAssunto('');
        setEmail('');
        setMensagem('');
        setMensagemVisible(false);
    }

    function handleCancel() {
        if(!mensagemVisible) {
            navigation.navigate('Initial');
            setAssunto('');
            setEmail('');
            setMensagem('');
        } else {
            setMensagemVisible(false);
        }
    }

    return(
        <ViewContato>
            <ViewTextContato>
                <TextContato>
                    Para dúvidas, reclamações, e informações, contate-nos preenchendo os campos abaixo:
                </TextContato>
            </ViewTextContato>
            <ViewFormContato>
                    { !mensagemVisible &&
                        <>
                            <TitleCampo>E-Mail</TitleCampo>
                            <InputContato onChangeText={setEmail} value={email} width="90%" height="10%" placeholder="seuemail@provedor.com"/>
                            <TitleCampo>Assunto</TitleCampo>
                            <InputContato onChangeText={setAssunto} value={assunto} width="90%" height="10%" placeholder=""/>
                        </>
                    }
                    { mensagemVisible &&
                        <>
                            <TitleCampo>Mensagem</TitleCampo>
                            <InputContato onChangeText={setMensagem} value={mensagem} width="90%" height="30%" placeholder=""/>
                        </>
                    }
                    <Buttons>
                        <ButtonCancelar onPress={handleCancel}>
                            {!mensagemVisible &&
                                <TextButtonCancelar>Cancelar</TextButtonCancelar>
                            }
                            {mensagemVisible &&
                                <TextButtonCancelar>Voltar</TextButtonCancelar>
                            }
                        </ButtonCancelar>
                        <ButtonEnviar onPress={!mensagemVisible ? handleMensagemVisible : enviarContato}>
                            {!mensagemVisible &&
                                <TextButtonEnviar>Próximo</TextButtonEnviar>
                            }
                            {mensagemVisible &&
                                <TextButtonEnviar>Enviar</TextButtonEnviar>
                            }
                        </ButtonEnviar>
                    </Buttons>
            </ViewFormContato>
        </ViewContato>
    );
}