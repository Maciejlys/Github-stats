import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import mock from "../context/mockedData/languages.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import {
  arrToInstanceCountObj,
  createPieChart,
  getChartDataFromObj,
  PieChartProps,
} from "../utils/chartUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

export const LanguagesChart: React.FC = () => {
  const { repos } = useContext(AppContext);
  const [languagesOcc, setLanguagesOcc] = useState<PieChartProps>(mock);
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
  const [languangesCount, setLanguangesCount] = useState(0);

  useEffect(() => {
    const allLanguages = repos.map((repo) => {
      return repo.language;
    });
    setLanguagesOcc(arrToInstanceCountObj(allLanguages));
    const data = getChartDataFromObj(arrToInstanceCountObj(allLanguages));
    setPieData(data.values);
    setPieLabels(data.labels);
    setLanguangesCount(data.labels.length);
    const chart = createPieChart(data.labels, data.values);
    setChart(chart);
  }, [repos]);

  return (
    <LanguagesChartStyles>
      <Pie className="chart" data={chart} />
      <h5>Total languages used: {languangesCount}</h5>
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

  h5 {
    font-size: 1rem;
    position: absolute;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0.3rem;
    bottom: -3rem;
    background-color: #161b22;
  }
`;
