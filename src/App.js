import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
