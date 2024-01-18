import React from "react";
import "../style/cardF.css";

export default function CardF({ obj }) {
  return (
    <div className="cardF">
      <div class="div-block-50">
        <div class="div-block-164">
          <img src={obj.photo} />
          <div>
            <div class="link-3">
              <p>{obj.name}</p>
            </div>
            <div class="text-block-33">
              <p>{obj.work}</p>
            </div>
          </div>
        </div>
        <p class="paragraph-6">{obj.text}</p>
      </div>
    </div>
  );
}
