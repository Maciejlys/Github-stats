import React, { useContext } from "react";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import { SearchBar } from "./components/SearchBar";
import { User } from "./components/User";
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
        {isLoading ? <Loading /> : show ? <Error /> : <User />}
      </MainStyle>
    </>
  );
}

export default App;
