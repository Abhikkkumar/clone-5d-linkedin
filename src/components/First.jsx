import React from "react";
import "../style/first.css";
import Header from "./Header";
import HeroL from "./HeroL";

export default function First() {
  return (
    <div className="first">
      <Header />
      <div className="sub sub-1">
        <div>
          <h1>
            Master The AI Powered Strategies <br />
            To Skyrocket Your LinkedIn <br /> In Just 5 Days!
          </h1>
        </div>
        <div>
          <p>
            Unlock the potential of AI to boost your LinkedIn Growth and learn
            the same strategies that won me over 400K+ followers, and 1000s of
            leads for FREE bringing in thousands of dollars on a monthly basis
            from Linkedin.
          </p>
        </div>
      </div>
      <div className=" sub sub-2">
        <div className="left">
          <HeroL />
        </div>
        <div className="right">
          <iframe
            src="https://www.youtube.com/embed/riO9rwCbq18?si=oCaQ7Hf9Rag1syod"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <p>Reserve a seat before January 11, 2024 to unlock</p>
            <p> Bonuses worth ₹45,000</p>
          </div>

          <button>Reserve Seat for 249</button>
        </div>
      </div>
    </div>
  );
}
