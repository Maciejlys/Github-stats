const getRandomColor = () => {
  const o = Math.round,
    rand = Math.random,
    s = 255,
    r = rand() * s,
    g = rand() * s,
    b = rand() * s;
  const border = "rgba(" + o(r) + "," + o(g) + "," + o(b) + "," + 1 + ")";
  const inside = "rgba(" + o(r) + "," + o(g) + "," + o(b) + "," + 0.5 + ")";
  return { border, inside };
};
export interface PieChartProps {
  [key: string]: number;
}
export const arrToInstanceCountObj = (arr: string[]) =>
  arr.reduce((obj: any, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
  }, {});
export const getChartData = (lang: PieChartProps) => {
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

const getRandomColors = (numberOfColors: number) => {
  const colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    colors.push(getRandomColor());
  }
  return colors;
};

export const createPieChart = (pieLabels: string[], pieData: number[]) => {
  const colors = getRandomColors(pieLabels.length);
  const borderColours = colors.map((col) => {
    return col.border;
  });
  const insideColours = colors.map((col) => {
    return col.inside;
  });
  return {
    labels: pieLabels,
    datasets: [
      {
        label: "Most used languages",
        data: pieData,
        backgroundColor: insideColours,
        borderColor: borderColours,
        borderWidth: 1,
      },
    ],
  };
};
