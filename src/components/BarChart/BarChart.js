import React, { Component } from "react";
import "./BarChart.css";

class BarChart extends Component {
  render() {
    return (
      <div className="BarChart">
        {" "}
        {Object.keys(this.props.data.rates).map(datum => (
          <div
            className="BarChart-bar"
            style={{
              height: 100 / this.props.data.rates[datum] + "%"
            }}
          >
            {datum} {this.props.data.rates[datum].toFixed(2)}{" "}
          </div>
        ))}{" "}
      </div>
    );
  }
}

export default BarChart;
