import { Link } from "react-router-dom";
import "./AboutContentStyle.css"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am a Full-Stack Web Developer.I create responsive and secure website
          for my clients
        </p>
        <p>
          I adore collaborating with businesses and brands to realize their
          vision for truly amazing digital assets and assist them achieve the
          outcomes required to grow their company and attract new clients.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src={
                "https://images.unsplash.com/photo-1531741403586-c19915ad5d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              className="img"
              alt="true"
            />
          </div>

          <div className="img-stack bottom">
            <img
              src={
                "https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80"
              }
              className="img"
              alt="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent