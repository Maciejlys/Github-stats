import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import mock from "../context/mockedData/languages.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { createPieChart } from "../utils/chartUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

export const getLabels = (lang: LanguagesChartProps) => {
  const labels = [];
  const values = [];
  for (const [key, value] of Object.entries(lang)) {
    if (key != "null") {
      labels.push(key);
      values.push(value);
    }
  }
  return { labels, values };
};

const arrToInstanceCountObj = (arr: string[]) =>
  arr.reduce((obj: any, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
  }, {});

export interface LanguagesChartProps {
  [key: string]: number;
}

export const LanguagesChart: React.FC = () => {
  const { repos } = useContext(AppContext);
  const [languagesOcc, setLanguagesOcc] = useState<LanguagesChartProps>(mock);
  const [pieData, setPieData] = useState([12, 19, 3, 5, 2, 3]);
  const [pieLabels, setPieLabels] = useState([
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
  ]);
  const [chart, setChart] = useState(createPieChart(pieLabels, pieData));

  useEffect(() => {
    const allLanguages = repos.map((repo) => {
      return repo.language;
    });
    setLanguagesOcc(arrToInstanceCountObj(allLanguages));
    const data = getLabels(arrToInstanceCountObj(allLanguages));
    setPieData(data.values);
    setPieLabels(data.labels);
    const chart = createPieChart(data.labels, data.values);
    setChart(chart);
  }, [repos]);

  return (
    <LanguagesChartStyles>
      <Pie className="chart" data={chart} />
    </LanguagesChartStyles>
  );
};

export const LanguagesChartStyles = styled.div`
  display: grid;
  place-content: center;
  width: auto;
  height: auto;
  position: relative;
  .chart {
    background-color: transparent;
  }
`;
