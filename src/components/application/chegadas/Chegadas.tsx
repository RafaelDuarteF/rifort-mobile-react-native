
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
    return(
        <Chegada>
            <Linha>
                <LinhaInfos>
                    <LinhaImage resizeMode='contain' source={require('../../../../assets/images/vetorOnibus.png')} />
                    <LinhaText>{linha}</LinhaText>
                </LinhaInfos>
                <LinhaColor />
            </Linha>
            <InfosOnibus>
                <InfosOnibusText>Chegada: {chegada}</InfosOnibusText>
                <InfosOnibusText>Lotação Máxima: {lotacaoMax} passageiros</InfosOnibusText>
                <InfosOnibusText>Lotação Atual: {lotacaoAtual} passageiros</InfosOnibusText>
            </InfosOnibus>
        </Chegada>
    );
}