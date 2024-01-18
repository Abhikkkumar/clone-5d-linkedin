import React from "react";
import "../style/fifth.css";
import LearningCard from "./LearningCard";
import data from "./LCardData";

export default function Fifth() {
  return (
    <div className="fifth">
      <h2>What You Will Learn Over 5 Value Packed Days</h2>
      <div className="f-container">
        {data.map((obj) => {
          return <LearningCard obj={obj} />;
        })}
      </div>
      <button className="cta-big-3 w-inline-block f-button">
        Jump Into The 5-Day LinkedIn Workshop For A Tiny ₹249
      </button>
    </div>
  );
}
