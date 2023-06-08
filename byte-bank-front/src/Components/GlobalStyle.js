import { createGlobalStyle } from "styled-components"
import { textoFundoClaro } from "./UI/variaveis"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${textoFundoClaro};
  }
`