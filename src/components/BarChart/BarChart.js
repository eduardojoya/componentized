import React, { Component } from "react";
import "./BarChart.css";
import Bar from "./Bar/Bar.js";

class BarChart extends Component {
  render() {
    return (
      <div className="BarChart">
        {" "}
        {Object.keys(this.props.data.rates).map(datum => (
          <Bar title={datum} value={this.props.data.rates[datum]} />
        ))}{" "}
      </div>
    );
  }
}

export default BarChart;
