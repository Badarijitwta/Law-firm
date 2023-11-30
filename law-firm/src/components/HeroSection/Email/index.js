import React from "react";
import "./email.css";

function email() {
  return (
    <div className="input-wrapper">
      <img src="Message 35.png" alt="Message Icon" id="mes-icon" />
      <input type="email" id="email" placeholder="Enter email address" />
      <button type="submit">Let's Talk</button>
    </div>
  );
}

export default email;
