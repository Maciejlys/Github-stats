import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { UserStyles } from "../Styled-components/UserStyles";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const { user } = useContext(AppContext);

  return (
    <UserStyles>
      <h1>hi</h1>
    </UserStyles>
  );
};
