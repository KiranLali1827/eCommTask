import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 200 },
];

const Salesactivity = () => {
  // Prepare Highcharts options
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "text",
    },
    xAxis: {
      categories: lineData.map((item) => item.name),
      title: {
        text: "Month",
      },
      gridLineWidth: 0, // Disable grid lines for X-axis
    },
    yAxis: {
      title: {
        text: "Value",
      },
      gridLineWidth: 0, // Disable grid lines for Y-axis
    },
    tooltip: {
      pointFormat: "<b>{point.y}</b>",
    },
    series: [
      {
        name: "Sales",
        data: lineData.map((item) => item.value),
        color: "grey",
        lineWidth: 2,
      },
    ],
  
  
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Salesactivity;
