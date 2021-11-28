import styled from "styled-components";

export const UserStyles = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #161b22;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 70%;
  height: 40%;
  display: flex;
  justify-content: center;

  p {
    width: 20vw;
  }
  > *:nth-child(2) {
    padding: 0 5vw 0 2vw;
  }
  align-items: center;
  flex-direction: row;
  > * {
    display: flex;
    flex-direction: column;
  }
  a {
    color: #ffffff;
    border-radius: 0%;
  }
  .login {
    font-style: italic;
  }
`;
