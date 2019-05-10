import React, { Component } from "react";
import "./App.css";

// import ComponentOne from './components/One/Pig.js';
// import ComponentTwo from './components/Two/Inventory.js';

// Refer to 4.1 Activity 3 Farm Game

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

  // Should this onChange be here or should it be in a Component cause it's a setState?
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
        <section className="TitleBar">
          <h1> Currency </h1>
          <div className="CurrencyChooser">
            <label>
              <select className="CurrencyChooser-select" value="EUR">
                <option value="EUR"> EUR </option>{" "}
                <option value="AUD"> AUD </option>{" "}
                <option value="BGN"> BGN </option>{" "}
                <option value="BRL"> BRL </option>{" "}
                <option value="CAD"> CAD </option>{" "}
                <option value="CHF"> CHF </option>{" "}
                <option value="CNY"> CNY </option>{" "}
                <option value="CZK"> CZK </option>{" "}
                <option value="DKK"> DKK </option>{" "}
                <option value="GBP"> GBP </option>{" "}
                <option value="HKD"> HKD </option>{" "}
                <option value="HRK"> HRK </option>{" "}
                <option value="HUF"> HUF </option>{" "}
                <option value="IDR"> IDR </option>{" "}
                <option value="ILS"> ILS </option>{" "}
                <option value="INR"> INR </option>{" "}
                <option value="ISK"> ISK </option>{" "}
                <option value="JPY"> JPY </option>{" "}
                <option value="KRW"> KRW </option>{" "}
                <option value="MXN"> MXN </option>{" "}
                <option value="MYR"> MYR </option>{" "}
                <option value="NOK"> NOK </option>{" "}
                <option value="NZD"> NZD </option>{" "}
                <option value="PHP"> PHP </option>{" "}
                <option value="PLN"> PLN </option>{" "}
                <option value="RON"> RON </option>{" "}
                <option value="RUB"> RUB </option>{" "}
                <option value="SEK"> SEK </option>{" "}
                <option value="SGD"> SGD </option>{" "}
                <option value="THB"> THB </option>{" "}
                <option value="TRY"> TRY </option>{" "}
                <option value="USD"> USD </option>{" "}
                <option value="ZAR"> ZAR </option>{" "}
              </select>
              →{" "}
            </label>{" "}
          </div>{" "}
          <div className="MultipleCurrencies">
            <label>
              <select
                value={this.state.currency}
                onChange={this.onCurrencyChange}
                className="CurrencyChooser-select"
              >
                <option value="EUR"> EUR </option>{" "}
                <option value="AUD"> AUD </option>{" "}
                <option value="BGN"> BGN </option>{" "}
                <option value="BRL"> BRL </option>{" "}
                <option value="CAD"> CAD </option>{" "}
                <option value="CHF"> CHF </option>{" "}
                <option value="CNY"> CNY </option>{" "}
                <option value="CZK"> CZK </option>{" "}
                <option value="DKK"> DKK </option>{" "}
                <option value="GBP"> GBP </option>{" "}
                <option value="HKD"> HKD </option>{" "}
                <option value="HRK"> HRK </option>{" "}
                <option value="HUF"> HUF </option>{" "}
                <option value="IDR"> IDR </option>{" "}
                <option value="ILS"> ILS </option>{" "}
                <option value="INR"> INR </option>{" "}
                <option value="ISK"> ISK </option>{" "}
                <option value="JPY"> JPY </option>{" "}
                <option value="KRW"> KRW </option>{" "}
                <option value="MXN"> MXN </option>{" "}
                <option value="MYR"> MYR </option>{" "}
                <option value="NOK"> NOK </option>{" "}
                <option value="NZD"> NZD </option>{" "}
                <option value="PHP"> PHP </option>{" "}
                <option value="PLN"> PLN </option>{" "}
                <option value="RON"> RON </option>{" "}
                <option value="RUB"> RUB </option>{" "}
                <option value="SEK"> SEK </option>{" "}
                <option value="SGD"> SGD </option>{" "}
                <option value="THB"> THB </option>{" "}
                <option value="TRY"> TRY </option>{" "}
                <option value="USD"> USD </option>{" "}
                <option value="ZAR"> ZAR </option>{" "}
              </select>{" "}
            </label>{" "}
          </div>{" "}
        </section>{" "}
        <div class="BarChart">
          {" "}
          {Object.keys(this.state.data.rates).map(datum => (
            <div
              className="BarChart-bar"
              style={{
                height: 100 / this.state.data.rates[datum] + "%"
              }}
            >
              {datum} {this.state.data.rates[datum].toFixed(2)}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
