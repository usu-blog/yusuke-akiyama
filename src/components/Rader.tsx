import React from "react";
import { Radar, defaults } from "react-chartjs-2";

defaults.global.defaultFontSize = 14;

const data = {
  labels: [
    "React",
    "Nuxt.js",
    "TypeScript",
    "Storybook",
    "Node.js",
    "Firebase",
    "Laravel",
  ],
  datasets: [
    {
      label: "My Skill",
      backgroundColor: "rgba(119, 203, 255,0.2)",
      borderColor: "rgba(119, 203, 255,1)",
      pointBackgroundColor: "rgba(119, 203, 255,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(119, 203, 255,1)",
      data: [4, 5, 4, 5, 4, 3, 3],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            // このフォントプロパティ指定は、グローバルプロパティを上書きします
            fontColor: "red",
          },
        },
      },
    },
  ],
};

export default function ({}) {
  return <Radar data={data} width={300} height={300} />;
}
