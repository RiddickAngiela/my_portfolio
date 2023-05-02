import { Link } from "react-router-dom";
import "./HeroImageStyle.css";

import React from 'react'

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <p>HI, I A'M RIDDICK WASHINGTON ANG'IELA. </p>
        <h1>YOUR CREATIVE SOFTWARE ENGINEER</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
          Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImage