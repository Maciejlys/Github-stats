import styled from "styled-components";

export const UserStyles = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #161b22;
  width: 100%;
  height: 100%;
  padding: 1rem;

  .container {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "one"
      "two"
      "three"
      "four";
    padding: 1rem;
  }
  .bio {
    grid-area: one;
  }
  .info:nth-child(1) {
    grid-area: two;
  }
  .info:nth-child(2) {
    grid-area: three;
  }
  .info:nth-child(3) {
    grid-area: four;
  }

  div .info {
    display: flex;
    gap: 0.5em;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 100%;
    padding: 1rem 0;
  }

  div .bio {
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  .svg {
    background-color: transparent;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    margin: 1rem;
  }
  p,
  p:hover {
    width: 40%;
    padding: 0 0 0 1vw;
    background-color: transparent;
  }

  align-items: center;
  flex-direction: row;
  > * {
    display: flex;
    flex-direction: column;
  }
  a .follow {
    color: #ffffff;
    border-radius: 0%;
    background-color: transparent;
  }
`;
