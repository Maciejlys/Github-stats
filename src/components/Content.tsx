import React from "react";
import { HighlightedInfo } from "./HighlightedInfo";
import { MainInfo } from "./MainInfo";
import styled from "styled-components";

interface ContentProps {}

export const Content: React.FC<ContentProps> = () => {
  return (
    <ContentStyles>
      <MainInfo />
      <HighlightedInfo />
    </ContentStyles>
  );
};

export const ContentStyles = styled.div`
  display: grid;
`;
