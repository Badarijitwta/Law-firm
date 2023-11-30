import React from "react";
import "./herosection.css";
import Email from "./Email";

function Herosection() {
  return (
    <div className="hero-section">
      <div className="textcontainer">
        <div className="head">
          <p>
            You don't have to <br />
            <span style={{ fontWeight: "700" }}>Fight Them Alone.</span>
          </p>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className="email">
          <Email />
        </div>
      </div>
      <img src="heroimage.png" alt="Hero" />
    </div>
  );
}

export default Herosection;
