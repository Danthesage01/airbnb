import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import { FiDollarSign, FiGlobe, FiChevronUp } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaAirbnb } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="sm-footer-center">
          <div>
            <FiSearch
              fontSize={"1.2rem"}
              color="#ff385c"
            />
            <p>Explore</p>
          </div>
          <div>
            <FiHeart fontSize={"1.2rem"} />
            <p>Wishlists</p>
          </div>
          <div>
            <FaAirbnb fontSize={"1.2rem"} />
            <p>Trips</p>
          </div>
          <div>
            <BiMessage fontSize={"1.2rem"} />
            <p>Inbox</p>
          </div>
          <div>
            <CgProfile fontSize={"1.2rem"} />
            <p>Profile</p>
          </div>
        </div>
        <div className="bg-footer-center">
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
      </div>
    </Wrapper>
  );
};

export default Footer;
