import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <header className="App-header">
          <h1>Hello World!</h1>
          <Search />
          <Weather city="Manila" />
        </header>
      </div>
    </div>
  );
}

export default App;
