import React, { useContext } from "react";
import { HighlightedInfo } from "./HighlightedInfo";
import { MainInfo } from "./MainInfo";
import styled from "styled-components";
import { AppContext } from "../context/context";
import { ReposInfo } from "./ReposInfo";

export const Content: React.FC = () => {
  const { user } = useContext(AppContext);
  const { login } = user;
  return (
    <ContentStyles>
      <h1>{login}</h1>
      <HighlightedInfo />
      <MainInfo />
      <ReposInfo />
    </ContentStyles>
  );
};

export const ContentStyles = styled.div`
  display: grid;
  place-items: center;
`;
