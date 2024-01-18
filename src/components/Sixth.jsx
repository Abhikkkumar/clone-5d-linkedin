import React from "react";
import "../style/sixth.css";
import sixData from "./SixData";
import SixCard from "./SixCard";

export default function Sixth() {
  return (
    <div className="sixth">
      <h2 class="section-heading-2">
        Register before midnight of
        <br />
        <span class="register-on cur-date">January 18, 2024</span>
        <br />
      </h2>
      <h3 class="section-subheading unlock-text s-sub-heading">
        To Unlock the bonuses worth Rs 45,000/-
      </h3>
      <div className="sc-container">
        {sixData.map((obj) => {
          return <SixCard obj={obj} />;
        })}
      </div>
    </div>
  );
}
