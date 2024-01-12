import React from "react";
import "../style/featured.css";
import aws from "../img/featured/aws.png";
import deccan from "../img/featured/deccan-chronicles.png";
import econ from "../img/featured/economics-times.png";
import eter from "../img/featured/enterprenure.png";
import theKen from "../img/featured/the-ken.png";
import yahoo from "../img/featured/yahoo.png";
import yourStory from "../img/featured/yourstory.png";
import indianExpress from "../img/featured/indian-express.png";
import theHindu from "../img/featured/the-hindu.png";

export default function Featured() {
  return (
    <div className="featured">
      <div className="f-heading">
        <div>
          <p>Featured In</p>
        </div>
      </div>
      <div className="f-img-container">
        <img src={aws} alt="" />
        <img src={deccan} alt="" />
        <img src={econ} alt="" />
        <img src={eter} alt="" />
        <img src={theKen} alt="" />
        <img src={yahoo} alt="" />
        <img src={yourStory} alt="" />
        <img src={indianExpress} alt="" />
        <img src={theHindu} alt="" />
      </div>
    </div>
  );
}
