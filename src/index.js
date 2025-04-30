import { createGanttChart } from "./d3-gantt.js";

const exampleData = [
  { date: new Date(2025, 3, 21), task: "Proyecto A" },
  { date: new Date(2025, 3, 28), task: "Proyecto B" },
  { date: new Date(2025, 4, 5), task: "Proyecto C" },
];

const width = 900;
const height = 300;
const margin = { top: 40, right: 30, bottom: 40, left: 50 };

createGanttChart({
  svgSelector: "#chart svg",
  data: exampleData,
  width,
  height,
  margin
});
