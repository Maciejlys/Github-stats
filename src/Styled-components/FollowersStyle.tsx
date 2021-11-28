import styled from "styled-components";

export const FollowersStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  height: 20rem;
  background-color: #161b22;
  width: 90%;
  height: 90%;
  padding: 1rem 0;
  @media (max-width: 30rem) {
    height: 20rem;
    padding: 1rem;
    flex-direction: column;
    p {
      padding: 0;
      width: 100%;
      text-align: center;
    }
  }
`;
