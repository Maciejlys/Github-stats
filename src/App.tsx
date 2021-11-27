import React from "react";
import { SearchBar } from "./components/SearchBar";
import { User } from "./components/User";
import { GlobalStyle } from "./Styled-components/GlobalStyle";
import { MainStyle } from "./Styled-components/MainStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainStyle>
        <SearchBar />
        <User />
      </MainStyle>
    </>
  );
}

export default App;
