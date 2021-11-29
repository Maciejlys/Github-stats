import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0;
  background-color: #161b22;
  height: 20rem;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0.3rem;
    background-color: #161b22;
    border-bottom: 1px solid white;
    margin-bottom: 0.5rem;
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
