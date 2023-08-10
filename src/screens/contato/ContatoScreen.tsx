import InputContato from "../../components/general/inputContato/InputContato";
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
    return(
        <ViewContato>
            <ViewTextContato>
                <TextContato>
                    Para dúvidas, reclamações, e informações, contate-nos preenchendo os campos abaixo:
                </TextContato>
            </ViewTextContato>
            <ViewFormContato>
                    <TitleCampo>E-Mail</TitleCampo>
                    <InputContato width="90%" height="10%" placeholder="seuemail@provedor.com"/>
                    <TitleCampo>Assunto</TitleCampo>
                    <InputContato width="90%" height="10%" placeholder=""/>
                    <TitleCampo>Mensagem</TitleCampo>
                    <InputContato width="90%" height="30%" placeholder=""/>
                    <Buttons>
                        <ButtonEnviar>
                            <TextButtonEnviar>Enviar</TextButtonEnviar>
                        </ButtonEnviar>
                        <ButtonCancelar>
                            <TextButtonCancelar>Cancelar</TextButtonCancelar>
                        </ButtonCancelar>
                    </Buttons>
            </ViewFormContato>
        </ViewContato>
    );
}