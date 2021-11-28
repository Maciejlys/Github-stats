import React from "react";
import { HighlightedInfo } from "./HighlightedInfo";
import { MainInfo } from "./MainInfo";

interface ContentProps {}

export const Content: React.FC<ContentProps> = () => {
  return (
    <>
      <MainInfo />
      <HighlightedInfo />
    </>
  );
};
