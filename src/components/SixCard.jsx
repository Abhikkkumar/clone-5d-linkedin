import React from "react";
import "../style/sixCard.css";

export default function SixCard({obj}) {
  return (
    <div className="sixCard">
      <div className="six-heading">
        <p className="sh-text1">{obj.text}</p>

        <img
          src={obj.pic}
          alt=""
        />
      </div>
      <div className="six-details">
        <p className="sd-text1">
          {obj.text1}
        </p>
        <p className="sd-text2">{obj.text2}</p>
        <p className="sd-text3">{obj.text3}</p>
      </div>
    </div>
  );
}
