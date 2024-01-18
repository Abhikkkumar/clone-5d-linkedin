import React from "react";
import "../style/nine.css";

export default function Nine() {
  return (
    <div className="nine">
      <div className="nine-wrapper">
        <h2 className="section-heading-2 green-gradient-span">
          Meet Your Mentor
        </h2>
        <input className="search-box" placeholder="Vaibhav Sisinty" />
        <div className="nine-num">
          <div className="mnImg">
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/65783a05792a4f62b6aa773c_Working%20(1)-p-1080.webp"
              alt=""
            />
          </div>
          <div className="mentor-num mn1">
            <p>150M+</p>
            <p>impressions</p>
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5ccc7c8d4b946ec43dde_Linkedin_Mobile.svg"
              alt=""
            />
          </div>
          <div className="mentor-num mn2">
            <p>300K+</p>
            <p>followers</p>
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5ccc7c8d4b946ec43dde_Linkedin_Mobile.svg"
              alt=""
            />
          </div>
          <div className="mentor-num mn3">
            <p>86K+</p>
            <p>followers</p>
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5ccc7c8d4b7facc43ddf_Icon-feather-instagram.svg"
              alt=""
            />
          </div>
          <div className="mentor-num mn4">
            <p>22K+</p>
            <p>followers</p>
            <img
              src="https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/5feb5ccd7c8d4b74a2c43de0_Icon-awesome-twitter.svg"
              alt=""
            />
          </div>
        </div>
        <p>
          Hi, I am Vaibhav Sisinty, I turn startups into profitable businesses,
          growth consult for brands and help them use the internet to increase
          profitability and their overall bottom lines.
        </p>
        <div className="nine-text">
          <div>
            <p>
              In 2012 (at age 19) I moved from running Discovery Android to
              founding{" "}
              <span class="green-text-span-3">
                an award winning digital media company, CrazyHeads.
              </span>{" "}
              Within 3 years, CrazyHead helped 100+ clients over the world grow
              their businesses using internet. <br />
              <br />
              After working at Uber (India and Latin America) for 4.5 years, I
              joined Klook to lead marketing for India and the Middle East where
              I scaled the business to over $27M in a year.
              <br />
            </p>
          </div>
          <div>
            <img
              src="
              https://assets-global.website-files.com/5fdb2866020c200cd7fd7369/6578337b8c7edcefb01bee5d_Google%20Event-1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
