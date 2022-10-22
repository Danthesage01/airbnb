import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import { FiDollarSign, FiGlobe, FiChevronUp } from "react-icons/fi";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center footer-center">
        <div className="start-footer">
          <p className="footer-date">
            &copy; {new Date().getFullYear()} Airbnb, Inc.
          </p>
          <div className="footer-info">
            <p> Privacy</p>
            <div className="text2-dot"></div>
            <p> Terms</p>
            <div className="text2-dot"></div>
            <p> Sitemap</p>
            <div className="text2-dot"></div>
            <p> Destinations</p>
          </div>
        </div>
        <div className="end-footer">
          <div className="end-footer-info">
            <span className="e-icons">
              <FiGlobe />
            </span>
            <span>English (US)</span>
          </div>
          <div className="end-footer-info">
            <span className="e-icons">
              <FiDollarSign />
            </span>
            <span>USD</span>
          </div>
          <div className="end-footer-info">
            <span>Support & Resources</span>
            <span className="e-icons e-icons-last">
              <FiChevronUp />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
