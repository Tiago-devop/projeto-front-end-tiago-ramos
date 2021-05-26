import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Automakers.scss";

const options = {
  chart: {
    height: 320,
    type: "area",
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 2050,
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
    labels: {
      formatter: function () {
        return this.value + " %";
      },
    },

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
      data: [3, 5, 12, 19, 8, 11, 9, 10, 7, 5],
    },
  ],
};

class Automakers extends Component {
  render() {
    return (
      <div className="automakers">
        <div className="automakers-title">
          <span className="material-icons">build</span>
          <div>MONTADORAS</div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default Automakers;
