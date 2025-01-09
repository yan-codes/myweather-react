import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
