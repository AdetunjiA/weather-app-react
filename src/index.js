import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather Search Engine</h1>
      </div>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
