import React, { Component } from "react";
import "./Bar.css";

class Bar extends Component {
  render() {
    return (
      <div
        className="BarChart-bar"
        style={{
          height: 100 / this.props.value + "%"
        }}
      >
        {this.props.title} {this.props.value.toFixed(2)}{" "}
      </div>
    );
  }
}

export default Bar;
