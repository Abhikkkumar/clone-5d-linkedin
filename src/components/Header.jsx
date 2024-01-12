import React from 'react'
import "../style/header.css";
import newYear from "../img/658d41d395935ff97c81c654_Group_1000003016_(1)-p-500.png";

export default function Header() {
  return (
    <div className='header'>
        <div>
          <p className="f-one-bold">Biggest reason</p>
          <p> to upskill now</p>
        </div>

        <img src={newYear} alt="new-year-img" />
        <p className="f-one-bold">Flat 50% off</p>
      
    </div>
  )
}
