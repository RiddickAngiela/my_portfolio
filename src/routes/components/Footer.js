import "./FooterStyle.css";

import React from 'react';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div footer>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>1881 Housing Society.</p>
              <p>Kisumu.</p>
            </div>
          </div>

          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p> +254 743 878 088</p>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>angielariddick@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About Myself</h4>
          <p>
            This is me Riddick Angiela.A junior software developer who is ready
            to work as a team and develop amazing sites. I enjoy discusing new
            projects and design challanges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer