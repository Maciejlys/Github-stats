import styled from "styled-components";

export const TwoColumnsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  > * {
    flex: 1 1 20em;
    max-width: 40rem;
  }
`;
