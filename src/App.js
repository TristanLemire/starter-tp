import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Parcourir from "./components/Parcourir";


const AppWrapper = styled.div`

`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
  }
`

const App = () => {
  return (
      <AppWrapper>
        <Parcourir/>
        <GlobalStyle />
      </AppWrapper>
  );
};

export default App;
