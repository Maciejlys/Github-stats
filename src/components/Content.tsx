import React, { useContext } from "react";
import { HighlightedInfo } from "./HighlightedInfo";
import { MainInfo } from "./MainInfo";
import styled from "styled-components";
import { AppContext } from "../context/context";

interface ContentProps {}

export const Content: React.FC<ContentProps> = () => {
  const { user } = useContext(AppContext);
  const { login } = user;
  return (
    <ContentStyles>
      <h1>{login}</h1>
      <HighlightedInfo />
      <MainInfo />
    </ContentStyles>
  );
};

export const ContentStyles = styled.div`
  display: grid;
  place-items: center;
`;
