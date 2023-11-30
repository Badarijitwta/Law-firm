import React from "react";
import "./navbar.css";

function Navbar({ children }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Vector.png" alt="Logo" />
        <h4>IGSTUDIO</h4>
      </div>
      <div className="header-items">
        <h5>Home</h5>
        <h5>Attorneys</h5>
        <h5>Practice Area</h5>
        <h5>About US</h5>
      </div>
      {children ? (
        <button id="contact">Contact Now</button>
      ) : (
        <img
          src="Group 90.png"
          style={{ height: "30px", width: "187px" }}
          alt="Iconstray"
        />
      )}
    </div>
  );
}

export default Navbar;
