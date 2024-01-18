import React from "react";
import "../style/seventh.css";

export default function Seventh() {
  return (
    <div className="seventh">
      <h2 class="section-heading-2">
        Time Is Running Out. Grab Your Spot Fast!
        <br />
      </h2>
      <div className="time-container">
        <div class="time-block-2">
          <div id="day-number" class="text-block-30">
            0
          </div>
          <div class="time-unit-2">Days</div>
        </div>
        <div class="time-block-2">
          <div id="hour-number" class="text-block-30">
            8
          </div>
          <div class="time-unit-2">Hrs</div>
        </div>
        <div class="time-block-2">
          <div id="minute-number" class="text-block-30">
            53
          </div>
          <div class="time-unit-2">Mins</div>
        </div>
        <div class="time-block-2">
          <div id="second-number" class="text-block-30">
            55
          </div>
          <div class="time-unit-2">Secs</div>
        </div>
      </div>
      <button className="cta-big-3 w-inline-block">
        Jump Into The 5-Day LinkedIn Workshop For A Tiny ₹249
      </button>
    </div>
  );
}
