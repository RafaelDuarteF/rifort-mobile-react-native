import styled, {css} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


interface PartApplicationContainerProps {
    border?: boolean,
}

export const ViewScreen = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.backgroundColor};
`;
export const PartApplicationContainer = styled.View<PartApplicationContainerProps>`
    width: 100%;
    height: 33%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    ${({border}) => border && css`
        border-bottom-width: 1px;
        border-color: ${({ theme }) => theme.line500color};
    `}
`;
export const ImageFundo = styled.Image`
    width: ${windowWidth}px;
    height: 100%;
    opacity: 0.4;
    margin-top: ${RFValue(-25)}px;
`;
export const TextInitialApplication = styled.Text`
    position: absolute;
    color: ${({ theme }) => theme.thirdColor};
    font-family: 'Roboto-Light';
    font-size: ${RFValue(16)}px;
`;
export const ImageLogo = styled.Image`
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: ${RFValue(40)}px;
`;
export const NivelLotacaoContainer = styled.View`
    width: 85%;
    padding: 25px 0px;
    flex-direction: row;
    justify-content: space-between;
`;
export const ScrollContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
`;
export const ChegadasContainer = styled.View`
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
`;