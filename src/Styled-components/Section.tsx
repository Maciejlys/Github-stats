import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0;
  border-radius: 0;
  background-color: #161b22;
  height: 20rem;

  @media (min-width: 30rem) {
    min-width: auto;
  }
  overflow-x: hidden;

  overflow-y: auto;
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
