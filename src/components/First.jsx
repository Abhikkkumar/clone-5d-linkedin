import React from "react";
import "./first.css";
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
            
            
            src="https://youtu.be/A5pSnIwbpaM?si=XEsquIQXvCDvkqmT"
            frameborder="0"
            allowfullscreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
