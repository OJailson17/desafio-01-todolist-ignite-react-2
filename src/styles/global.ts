import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${props => props.theme['gray-600']};
  color: ${props => props.theme['gray-100']}
}

body, input, button, text-area {
  font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;
}

`;
