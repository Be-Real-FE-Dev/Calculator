import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html,
body {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}
      
`;

export default GlobalStyle;
