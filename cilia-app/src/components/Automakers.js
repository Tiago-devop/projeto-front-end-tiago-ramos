import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Automakers.scss";

const options = {
  chart: {
    type: "area",
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 2040,
        },

        // need to be changed, without responsive rules.
        chartOptions: {
          legend: { enabled: false },
        },
      },
    ],
  },

  credits: {
    enabled: false,
  },

  title: {
    text: "",
  },

  colors: ["#ED3237"],

  yAxis: {
    title: {
      text: "",
    },
  },

  xAxis: {
    categories: [
      "BMW",
      "Chevrolet",
      "Citroen",
      "Fiat",
      "Ford",
      "Honda",
      "Hyundai",
      "Iveco",
      "Jeep",
      "Renault",
    ],
  },

  series: [
    {
      name: "Percent",
      data: [100, 200, 30, 100, 30, 50, 100, 200, 300, 50],
      // zones: [{ color: "black" }],
    },
  ],
};

class Automakers extends Component {
  render() {
    return (
      <div className="Automakers">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default Automakers;
