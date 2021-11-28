import styled from "styled-components";

export const TwoColumnsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex: 1 1 30em;
    max-width: 40rem;
  }
`;
