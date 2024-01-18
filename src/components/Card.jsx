import React from "react";
import "../style/card.css";

import indian from "../img/cards/indian-3.png";
import check from "../img/cards/check-icon.svg";
// import icon from "../img/cards/masked-man.svg";

export default function Card({ obj }) {
    console.log( typeof obj.heading.icon);
  return (
    <div className="card">
      {/* <img src={icon} alt="111" /> */}
      <img className="p-photo" src={obj.heading.icon} alt="111" />
      {/* <img src={`../img/cards/${obj.heading.icon}`} alt="111" /> */}
      <h2 className="heading">{obj.heading.designation}</h2>

      <div className="details">
        {obj.details.map((text) => {
          return (
            <div className="d-sub">
              <img src={check} alt="12" />
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      <div className="bottom">
        <div className="c-left">
          <p className="c-name">{obj.bottom.name}</p>
          <p className="c-designation">{obj.bottom.profession}</p>
        </div>
        <div className="c-right">
          <img src={obj.bottom.photo} alt="13" />
        </div>
      </div>
    </div>
  );
}
