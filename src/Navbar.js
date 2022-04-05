import "./navbar.css";
import { React, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ hook }) {
  const onClick = () => {
    hook[0].current.scrollIntoView({ behavior: "smooth" });
  };
  const onClick2 = () => {
    hook[1].current.scrollIntoView({ behavior: "smooth" });
  };
  const onClick3 = () => {
    hook[2].current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="container">
        <div className="name">
          <h>Cho HyeonWoo</h>
        </div>
        <div className="menu-container">
          <div className="menu">
            <p onClick={onClick2}>Bio</p>
          </div>
          <div className="menu">
            <p onClick={onClick}>Contact</p>
          </div>
          <div className="menu">
            <p onClick={onClick3}>Works</p>
          </div>
          <div className="menu">
            <a href="https://github.com/mettew0585">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
