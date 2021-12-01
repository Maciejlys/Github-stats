import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { createPieChart, getChartDataFromArr } from "../utils/chartUtils";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { LanguagesChartStyles } from "./LanguagesChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const StarredChart: React.FC = () => {
  const { repos } = useContext(AppContext);
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
  const [totalStars, setTotalStar] = useState(0);
  useEffect(() => {
    const allProjects = repos.map((repo) => {
      const { name, stargazers_count } = repo;
      return { name, stargazers_count };
    });
    setTotalStar(
      getChartDataFromArr(allProjects).values.reduce(function (a, b) {
        return a + b;
      }, 0)
    );
    allProjects.sort((a, b) => {
      var x = a.stargazers_count > b.stargazers_count ? -1 : 1;
      return x;
    });

    const data = getChartDataFromArr(allProjects.slice(0, 5));

    const chart = createPieChart(data.labels, data.values);
    setChart(chart);
  }, [repos]);
  return (
    <LanguagesChartStyles>
      <Pie className="chart" data={chart} />
      <h5>Total stars: {totalStars}</h5>
    </LanguagesChartStyles>
  );
};
