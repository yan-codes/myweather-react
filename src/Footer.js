import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer-links">
        This project was coded by{" "}
        <a
          href="mailto:dlpcardenas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="Yan"
        >
          Dianne Louise
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/yan-codes/myweather-react"
          target="_blank"
          rel="noopener noreferrer"
          className="Git"
        >
          Git-hub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://mermaid-myweather-react.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="Netli"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}
