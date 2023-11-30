import React from "react";
import "./sub.css";

function Subscription() {
  return (
    <div className="parent-sub">
      <h2>Subscribe Our Newsletter</h2>
      <div className="input-cont-sub">
        <input type="name" name="name" id="name" placeholder="Name :" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Subscription;
