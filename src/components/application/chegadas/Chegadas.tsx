
import {
    Chegada,
    Linha,
    LinhaImage,
    LinhaText,
    LinhaColor,
    LinhaInfos,
    InfosOnibus,
    InfosOnibusText,
} from './style';

export default function Chegadas() {
    return(
        <Chegada>
            <Linha>
                <LinhaInfos>
                    <LinhaImage resizeMode='contain' source={require('../../../../assets/images/vetorOnibus.png')} />
                    <LinhaText>Terminal Amaral Gurgel</LinhaText>
                </LinhaInfos>
                <LinhaColor />
            </Linha>
            <InfosOnibus>
                <InfosOnibusText>Chegada: 12:14</InfosOnibusText>
                <InfosOnibusText>Lotação Máxima: 45 passageiros</InfosOnibusText>
                <InfosOnibusText>Lotação Atual: 30 passageiros</InfosOnibusText>
            </InfosOnibus>
        </Chegada>
    );
}