import React from "react";
import { Flex } from "../Styled-components/Flex";
import { LoadingStyles } from "../Styled-components/LoadingStyles";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <Flex>
      <LoadingStyles>
        <h1>Loading</h1>
      </LoadingStyles>
    </Flex>
  );
};
