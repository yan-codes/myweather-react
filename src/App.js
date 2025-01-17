import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <header className="App-header">
          <Search />
        </header>
        <div className="Main"></div>
      </div>
    </div>
  );
}

export default App;
