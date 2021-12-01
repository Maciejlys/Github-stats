import styled from "styled-components";

export const FollowerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
  border-radius: 1rem;
  padding: 1rem;
  width: 80%;
  @media (max-width: 55rem) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      padding: 0;
      width: 100%;
      text-align: center;
    }
  }
`;
