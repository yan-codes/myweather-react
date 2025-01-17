import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <header className="App-header">
          <Search />
        </header>
        <div className="Main"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
