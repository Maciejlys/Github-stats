import React from "react";
import { Section } from "../Styled-components/Section";
import { TwoColumnsWrapper } from "../Styled-components/TwoColumnsWrapper";
import { LanguagesChart } from "./LanguagesChart";

export const ReposInfo: React.FC = () => {
  return (
    <TwoColumnsWrapper>
      <Section>
        <h4>Most used languages:</h4>
        <LanguagesChart />
      </Section>
      <Section>
        <h1></h1>
      </Section>
    </TwoColumnsWrapper>
  );
};
