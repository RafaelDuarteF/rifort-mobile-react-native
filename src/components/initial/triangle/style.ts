import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: 'top' | 'bottom',

}

export const TriangleContainer = styled.View<TypeProps>`
    width: ${RFValue(400)}px;
    height: ${RFValue(400)}px;
    transform: rotate(50deg);
    border: 1px solid ${({ theme }) => theme.primaryColor};
    position: absolute;
    top: ${({ type }) => (type === 'top' ? RFValue(-260) + 'px' : 'auto')};
    bottom: ${({ type }) => (type === 'bottom' ? RFValue(-260) + 'px' : 'auto')};
    left: ${({ type }) => (type === 'top' ? RFValue(-260) + 'px' : 'auto')};
    right: ${({ type }) => (type === 'bottom' ? RFValue(-260) + 'px' : 'auto')};
`;
export const TriangleF = styled.View<TypeProps>`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  background-color: ${({ theme }) => theme.primaryColor};
  transform: rotate(50deg);
  position: absolute;
  top: ${({ type }) => (type === 'top' ? RFValue(-160) + 'px' : 'auto')};
  bottom: ${({ type }) => (type === 'bottom' ? RFValue(-160) + 'px' : 'auto')};
  left: ${({ type }) => (type === 'top' ? RFValue(-160) + 'px' : 'auto')};
  right: ${({ type }) => (type === 'bottom' ? RFValue(-160) + 'px' : 'auto')};
`;