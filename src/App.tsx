import React, { useContext } from "react";
import { Content } from "./components/Content";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import { SearchBar } from "./components/SearchBar";
import { AppContext } from "./context/context";
import { GlobalStyle } from "./Styled-components/GlobalStyle";
import { MainStyle } from "./Styled-components/MainStyle";

function App() {
  const { isLoading, error } = useContext(AppContext);
  const { show } = error;
  return (
    <>
      <GlobalStyle />
      <MainStyle>
        <SearchBar />
        {isLoading ? <Loading /> : show ? <Error /> : <Content />}
      </MainStyle>
    </>
  );
}

export default App;
