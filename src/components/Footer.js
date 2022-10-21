import React from "react";
import Wrapper from "../assets/wrappers/Footer";
const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <p>
          © {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms · Sitemap
          · Destinations
        </p>
      </div>
      ;
    </Wrapper>
  );
};

export default Footer;
