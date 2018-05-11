import React from "react";
import logo from "../../logo.png";
import "./NotFound.css";

const NotFound = () => (
  <div className="NotFound">
    <img src={logo} alt="logo" />
    <h1 className="heading">Explore. Dream. Discover.</h1>
    <p className="text">
      but not here this is a 404 <br />
    </p>
    <a href="/">GO BACK!</a>

  </div>
);

export default NotFound;
