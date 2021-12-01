import React from "react";
import { Flex } from "../Styled-components/Flex";
import { LoadingStyles } from "../Styled-components/LoadingStyles";

export const Loading: React.FC = () => {
  return (
    <Flex>
      <LoadingStyles>
        <h1>Loading</h1>
      </LoadingStyles>
    </Flex>
  );
};
