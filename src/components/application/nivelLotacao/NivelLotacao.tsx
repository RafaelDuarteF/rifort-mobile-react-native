import {
    Container,
    CorLotacao,
    TextLotacao,
} from './style';

interface NivelLotacaoProps {
    cor: string,
    title: string
}

export default function NivelLotacao({ cor, title }: NivelLotacaoProps) {
    return (
        <Container>
            <CorLotacao cor={cor} />
            <TextLotacao>{title}</TextLotacao>
        </Container>
    );
}