/* CSS in JS Global Styles 
  Holds the styles for the application
*/

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.50s linear;
  position: relative;
}

@media screen and (max-width: 414px){
  body {
    padding-bottom: 2em;
  }
}

.App {
  padding: 12px 15px;
}
`;
