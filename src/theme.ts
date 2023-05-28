import { DefaultTheme } from 'styled-components/native';
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    backgroundColor: string;
    line500color: string;
    line700color: string;
  }
}

const theme: DefaultTheme = {
    primaryColor: '#fc9a5d', // Laranja Padrão RIFORT
    secondaryColor: '#fabc96', // Laranja Claro Secundário Padrão RIFORT
    thirdColor: 'gainsboro', // Cinza Claro Terciário Padrão RIFORT
    backgroundColor: '#141414', // Background Cinza Escuro Padrão RIFORT
    line500color: '#353535', // Linhas Divisórias do Site 500
    line700color: '#2F2F2E', // Linhas Divisórias do Site 700
}
export default theme;