import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="rowwe">
          <div className="coll">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-input"
            />
          </div>
          <div className="coll">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
    </div>
  );
}
