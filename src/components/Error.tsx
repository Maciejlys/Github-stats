import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Flex } from "../Styled-components/Flex";

interface ErrorProps {}

export const Error: React.FC<ErrorProps> = () => {
  const { error } = useContext(AppContext);
  return (
    <Flex>
      <h1>{error.msg}</h1>
    </Flex>
  );
};
