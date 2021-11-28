import React from "react";
import { Followers } from "./Followers";
import { User } from "./User";
import { TwoColumnsWrapper } from "../Styled-components/TwoColumnsWrapper";
export const MainInfo: React.FC = () => {
  return (
    <>
      <TwoColumnsWrapper>
        <User />
        <Followers />
      </TwoColumnsWrapper>
    </>
  );
};
