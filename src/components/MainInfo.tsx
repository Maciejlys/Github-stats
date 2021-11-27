import React from "react";
import { Flex } from "../Styled-components/Flex";
import { Followers } from "./Followers";
import { User } from "./User";
import styled from "styled-components";

export const MainInfo: React.FC = () => {
  return (
    <MainInfoStyles>
      <User />
      <Followers />
    </MainInfoStyles>
  );
};

const MainInfoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
