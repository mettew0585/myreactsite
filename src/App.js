import "./App.css";
import Navbar from "./Navbar.js";
import { React, useRef, useState } from "react";
import Introduction from "./Introduction.js";
import Contact from "./Contact.js";
import Works from "./Works.js";

function App() {
  const ttt = useRef();
  const ttt2 = useRef();
  return (
    <>
      <div>
        <Navbar hook={[ttt, ttt2]}></Navbar>
        <div className="something">
          <Introduction hook={ttt2}></Introduction>
        </div>
        <div className="c">
          <Contact hook={ttt}></Contact>
        </div>
        <div className="room-for-works">
          <Works></Works>
        </div>
        <footer className="footer">
          &copy;Copyright 2022 Chohyeonwoo All Rights Reserved
        </footer>
      </div>
    </>
  );
}

export default App;
