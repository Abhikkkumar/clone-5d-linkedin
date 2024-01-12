import React from "react";
import "../style/second.css";
import lakh2 from "../img/5fed796845a05dfc86483284_vedika-leads-2.png";
import vaibhav from "../img/5fed796845a05da05a483286_alok-2.png";
import job2 from "../img/5fed79465c148a1759d1e03d_aradhya.png";
import true1 from "../img/5fed796845a05d4cea48328c_achyut-2.png";
import playBtn from "../img/5fed79465c148a56e1d1e041_play-button-croped.png";

export default function Second() {
  return (
    <div className="second">
      <div className="workshop">
        <div>
          <p>Attended the workshop </p>
          <p className="bold">40,000+</p>
        </div>
      </div>
      <div className="rating">
        <div>
          <p>Avg Rating</p>
          <p className="bold">9.3/10</p>
        </div>
      </div>
      <div className="lakh2">
        <img className="play"  src={playBtn} alt="play-btn" />
        <img src={lakh2} alt="" />
      </div>
      <div className="vaibhav">
        <img className="play"  src={playBtn} alt="play-btn" />
        <img src={vaibhav} alt="" />
      </div>
      <div className="job2">
        <img className="play"  src={playBtn} alt="play-btn" />
        <img src={job2} alt="" />
      </div>
      <div className="true">
        <img  className="play" src={playBtn} alt="play-btn" />
        <img src={true1} alt="" />
      </div>
    </div>
  );
}
