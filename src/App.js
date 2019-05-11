import React, { Component } from "react";
import "./App.css";
import CurrencyChooser from "./components/CurrencyChooser/CurrencyChooser.js";
import BarChart from "./components/BarChart/BarChart.js";
import Bar from "./components/BarChart/Bar/Bar.js";

class App extends Component {
  state = {
    currency: "EUR",
    data: {
      rates: {}
    }
  };

  componentDidMount() {
    fetch(
      "https://api.exchangeratesapi.io/latest?symbols=USD,CAD,SGD,AUD,PHP,THB"
    )
      .then(response => response.json())
      .then(response => {
        console.log("Data received", response);
        this.setState({
          data: response
        });
      });
  }

  onCurrencyChange = ev => {
    let value = ev.target.value;
    this.setState({
      currency: value
    });

    console.log("Changing currency to", value);

    fetch(`https://api.exchangeratesapi.io/latest?symbols=${value}`)
      .then(response => response.json())
      .then(response => {
        console.log("Data received", response);
        this.setState({
          data: response
        });
      });
  };

  render() {
    return (
      <div className="App">
        <CurrencyChooser
          currency={this.state.currency}
          onCurrencyChange={this.onCurrencyChange}
        />
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
