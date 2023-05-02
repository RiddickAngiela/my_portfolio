import { Link } from "react-router-dom";
import "./PricingCardStyle.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
      <div card-container>
        <div className="card">
          <h3>Websites of High Quality</h3>
          <p className="btc">
            When working on a project, the first thing that comes to mind is
            quality. Because nearly 80% of visitors are on mobile,
            responsiveness and mobile-first are my aims when designing a
            website.
          </p>
          <Link to="/contact" className="btn">
            CHECK OUT
          </Link>
        </div>
        <div className="card">
          <h3>User-centered design</h3>
          <p className="btc">
            Designing engaging and meaningful user experiences gives you a
            competitive advantage in terms of differentiating yourself from
            competitors, satisfying your consumers, and, as a result, achieving
            your business objectives.
          </p>
          <Link to="/contact" className="btn">
            CHECK OUT
          </Link>
        </div>
        <div className="card">
          <h3>A Mind That Is Creative</h3>
          <p className="btc">
            I've always believed that work is a manifestation of one's
            personality: a line of code is just as creative as a well-designed
            layout, and a layout is only successful when it turns technical
            limits into strengths.
          </p>
          <Link to="/contact" className="btn">
            CHECK OUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCard