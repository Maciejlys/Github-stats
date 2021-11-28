import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0;
  background-color: #161b22;
  height: 20rem;

  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 30rem) {
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 1em;
    position: relative;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  a {
    border-radius: 0;
  }
`;
