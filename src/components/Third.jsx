import React from "react";
import "../style/third.css";
import Caraousel from "./Caraousel";

export default function Third() {
  return (
    <div className="third">
      <h2>Please Check All Boxes</h2>
      <h2>Where Your Answer is Yes!</h2>
      <form action="mailto:'imakumarabhishek@gmail.com'">
        <div className="th-1">
          <div className="inpt">
            <input type="checkbox" name="first" />
            <p htmlFor="first">
              I want to build my personal brand but have no idea where to start
            </p>
          </div>
          <div className="inpt">
            <input type="checkbox" name="second" />
            <p htmlFor="second">
              I want prospects or recruiters to approach me instead of me you
              approaching them
            </p>
          </div>
          <div className="inpt">
            <input type="checkbox" name="third" />
            <p htmlFor="third">
              I am trying to figure out a way to reach more people organically
              but failing to do so
            </p>
          </div>
        </div>
        <div className="th-2">
          <div className="inpt">
            <input type="checkbox" name="fourth" />
            <p htmlFor="fourth">
              I want to get top quality leads without spending a dollar in ads
            </p>
          </div>
          <div className="inpt">
            <input type="checkbox" name="fifth" />
            <p htmlFor="fifth">
              I want to generate more leads for my business but have no idea how
              to do it
            </p>
          </div>
          <div className="inpt">
            <input type="checkbox" name="sixth" />
            <p htmlFor="sixth">
              I’m convinced that I need to leverage the power of LinkedIn but
              don't know how to get started
            </p>
          </div>
        </div>
      </form>
      <div className="checkbox-context">
        If you checked ANY of the boxes above, then you’re invited to join{" "}
        <span className="orange-text">
          The 5 Day Transformative LinkedIn Workshop
        </span>
        . If you don’t believe me, just look at the kind of results my students
        have been getting:
      </div>
      <Caraousel />
      <button className="cta-big-3 w-inline-block">
      Jump Into The 5-Day LinkedIn Workshop For A Tiny ₹249
      </button>
    </div>
  );
}
