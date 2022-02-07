import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather Search Engine</h1>

        <Weather />
        <small>
          <a
            href="https://github.com/AdetunjiA/weather-app-react"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Adeola Adetunji and{" "}
          <a
            href="https://awesome-goodall-f288fe.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
