
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

interface ChegadasProps {
    linha: string,
    chegada: string,
    lotacaoMax: number,
    lotacaoAtual: number,
}

export default function Chegadas({linha, chegada, lotacaoMax, lotacaoAtual} : ChegadasProps) {

    const vermelhaLotacao = lotacaoMax * 0.8;
    const laranjaLotacao = lotacaoMax * 0.5;
    const corLotacao = setColorLotacao();

    function setColorLotacao() {
        if(vermelhaLotacao < lotacaoAtual) {
            return 'red';
        } else if (laranjaLotacao < lotacaoAtual) {
             return 'orange';
        } else {
            return 'green';
        }
    }

    return(
        <Chegada>
            <Linha>
                <LinhaInfos>
                    <LinhaImage resizeMode='contain' source={require('../../../../assets/images/vetorOnibus.png')} />
                    <LinhaText>{linha}</LinhaText>
                </LinhaInfos>
                <LinhaColor cor={corLotacao} />
            </Linha>
            <InfosOnibus>
                <InfosOnibusText>Chegada: {chegada}</InfosOnibusText>
                <InfosOnibusText>Lotação Máxima: {lotacaoMax} passageiros</InfosOnibusText>
                <InfosOnibusText>Lotação Atual: {lotacaoAtual} passageiros</InfosOnibusText>
            </InfosOnibus>
        </Chegada>
    );
}