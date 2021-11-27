import styled from "styled-components";

export const FollowersStyle = styled.div`
  height: 20rem;
  width: 35rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
