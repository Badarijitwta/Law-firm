import React from "react";
import Navbar from "../Navbar";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-bar">
          <Navbar />
        </div>
        <div className="lastmenu">
          <p>&copy; 2023 All Rights Reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
