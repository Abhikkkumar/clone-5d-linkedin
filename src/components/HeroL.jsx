import React from "react";
import "../style/heroL.css";
import clock from "../img/60d4e6508e4e0d3d23669fba_Vector-2.svg";
import videoIcon from "../img/60d4e6511fcd6385aa72ac2c_Vector.svg";
import calendar from "../img/60d4e65262351a5934d23184_Vector-3.svg";
import timerIcon from "../img/60d4e6518fb1a604cf725212_Vector-1.svg";
import followers from "../img/65338b50383c4338fb1bb33c_linkedinFollowers.51211cbe.svg";
import impressions from "../img/60d4e95f01e9004a53d63d9e_Frame 1274.svg";

export default function HeroL() {
  return (
    <div className="heroL">
      <div className="d-1">
        <div className="h-details">
          <img src={clock} alt="clock" />
          <p>5 Days</p>
        </div>
        <div className="h-details">
          <img src={videoIcon} alt="clock" />
          <p>Pre-recorded videos + Zoom QnA</p>
        </div>
        <div className="h-details">
          <img src={calendar} alt="clock" />
          <p>Jan 14th, 2024</p>
        </div>
        <div className="h-details">
          <img src={timerIcon} alt="clock" />
          <p>7 PM IST ( 3 Hour Stream)</p>
        </div>
      </div>
      <div className="d-2">
        <div>
          <h2>Vaibhav Sisinty</h2>
          <p>LinkedIn Growth Expert,</p>
          <p>Growth Hacker,</p>
          <p>Ex- Uber & Klook</p>
        </div>
      </div>
      <div className="d-3">
          <div>
              <img src={followers} alt="" />
          </div>
          <div>
              <img src={impressions} alt="" />
          </div>
      </div>
    </div>
  );
}
