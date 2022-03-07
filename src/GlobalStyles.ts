import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  overflow-x: hidden;
  background-color: #141414;
}

.App {
  height: 100vh;
  width: 100vw;
  max-width: 900px;
  padding: 1rem;
  background-color: lightpink;
}
`;
