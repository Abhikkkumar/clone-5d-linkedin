import React from "react";
import "../style/learningCard.css";

export default function LearningCard({obj}) {
  return (
    <div className="l-card">
      <h3>{obj.heading}</h3>
      <img
        src={obj.photo1}
        alt=""
      />
      <div className="l-card-details">
        <div>
          <img
            src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5c987b9f08745a9463d2_check-mark-black-outline.svg"
            alt="check-icon"
          />
          <p>
            {obj.text1}
          </p>
        </div>
        <div>
          <img
            src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5cb7788dbcc6151f2479_omb-icon.png"
            alt="fire-icon"
          />
          <p>{obj.text2}</p>
        </div>
      </div>
    </div>
  );
}
