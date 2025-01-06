import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./home.scss";

const AnalyticsDashboard = () => {
  const [selectedGraph, setSelectedGraph] = useState("Status");

  // Dropdown options
  const dropdownOptions = [
    { label: "Status by Assigned To", value: "Status" },
    { label: "Count by Category", value: "Count" },
  ];

  // Highcharts options for the stacked bar chart
  const stackedBarChartOptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Status By Assigned To",
    },
    xAxis: {
      categories: [
        "Not Assigned",
        "Abdullah, Sheik",
        "Singh, Avnash",
        "Gupta, Naresh",
        "Kosuri, Lokesh",
        "Badugu, Mounika",
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Initiatives",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      { name: "Pending", data: [5, 3, 4, 7, 2, 6], type: "bar" },
      { name: "In Progress", data: [2, 2, 3, 2, 1, 4], type: "bar" },
      { name: "Completed", data: [3, 4, 4, 2, 5, 3], type: "bar" },
    ],
  };

  // Highcharts options for the pie chart
  const pieChartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Count by Category",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Initiatives",
        colorByPoint: true,
        data: [
          { name: "Define Features", y: 18 },
          { name: "Define MVP", y: 111 },
          { name: "Pending Prioritization", y: 39 },
          { name: "Draft", y: 68 },
          { name: "VROM Pending", y: 919 },
          { name: "Fund Pending", y: 1 },
          { name: "Withdrawn", y: 3 },
          { name: "Completed", y: 1 },
        ],
        type: "pie",
      },
    ],
  };

  return (
    <div className="datatable-container">
      {/* Dropdown */}
      <div className="analytics-dropdown-container">
        <label>Select Graph Type:</label>
        <Dropdown
          value={selectedGraph}
          options={dropdownOptions}
          onChange={(e) => setSelectedGraph(e.value)}
          placeholder="Select Graph Type"
        />
      </div>

      {/* Indicative Count */}
      <div className="analytics-indicative-count-container">
        <h3>Initiatives Count</h3>
        <div className="analytics-indicative-row">
          <div className="analytics-indicative-item">
            <span>Total</span>
            <h4>1160</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Define Features</span>
            <h4>18</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Define MVP</span>
            <h4>111</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Pending Prioritization</span>
            <h4>39</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Draft</span>
            <h4>68</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>VROM Pending</span>
            <h4>919</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Fund Pending</span>
            <h4>1</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Withdrawn</span>
            <h4>3</h4>
          </div>
          <div className="analytics-indicative-item">
            <span>Completed</span>
            <h4>1</h4>
          </div>
        </div>
      </div>

      {/* Highcharts */}
      <div className="analytics-chart-container">
        {selectedGraph === "Status" ? (
          <HighchartsReact highcharts={Highcharts} options={stackedBarChartOptions} />
        ) : (
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
