import { createGlobalStyle } from 'styled-components';
import f1 from '../../images/pistaf1.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${f1}) center no-repeat;  
    background-size: cover;
    color: #fff;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;