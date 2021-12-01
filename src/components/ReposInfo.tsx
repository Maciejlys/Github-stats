import React from "react";
import { Section } from "../Styled-components/Section";
import { TwoColumnsWrapper } from "../Styled-components/TwoColumnsWrapper";
import { LanguagesChart } from "./LanguagesChart";
import { StarredChart } from "./StarredChart";

export const ReposInfo: React.FC = () => {
  return (
    <TwoColumnsWrapper>
      <Section>
        <h4>Used languages:</h4>
        <LanguagesChart />
      </Section>
      <Section>
        <h4>Top 5 starred projects:</h4>
        <StarredChart />
      </Section>
    </TwoColumnsWrapper>
  );
};
