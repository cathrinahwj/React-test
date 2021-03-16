import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Cathrina Hao and is{" "}
          <span
            href="https://github.com/cathrinahwj/React-test"
            target="_blank"
          >
            open-sourced on GitHub
          </span>{" "}
          and{" "}
          <span
            href="https://serene-swartz-e9f6f7.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </span>
        </footer>
      </div>
    </div>
  );
}
