import styled from "styled-components";

interface MyProps {
  dir?: string;
  gap?: string;
  just?: string;
}

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ just }: MyProps) => just || "center"};
  flex-direction: ${({ dir }: MyProps) => dir};
  gap: ${({ gap }: MyProps) => gap};
  flex-wrap: wrap;
`;
