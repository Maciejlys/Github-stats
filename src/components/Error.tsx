import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Flex } from "../Styled-components/Flex";

export const Error: React.FC = () => {
  const { error } = useContext(AppContext);
  return (
    <Flex>
      <h1>{error.msg}</h1>
    </Flex>
  );
};
