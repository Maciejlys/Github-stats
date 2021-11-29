import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { Section } from "../Styled-components/Section";
import { TwoColumnsWrapper } from "../Styled-components/TwoColumnsWrapper";
import { LanguagesChart } from "./LanguagesChart";

export const ReposInfo: React.FC = () => {
  const { repos } = useContext(AppContext);
  const [languages, setLanguages] = useState<String[]>();

  useEffect(() => {
    const allLanguages = repos.map((repo) => {
      return repo.language;
    });
    setLanguages(languages);
  }, []);
  return (
    <TwoColumnsWrapper>
      <Section>
        <LanguagesChart />
      </Section>
      <Section>
        <h1>hi</h1>
      </Section>
    </TwoColumnsWrapper>
  );
};
