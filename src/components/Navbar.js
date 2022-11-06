import Wrapper from "../assets/wrappers/Navbar";
import logo from "../assets/images/airbnb.svg";
import { FiSearch, FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoPersonCircleSharp } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import filter from "../assets/images/filter.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

    const [userLogin, SetUserLogin] = useState(false);

  return (
    <React.Fragment>
      <Wrapper home>
        <div className="section-center nav-center">
          <Link to="/">
            <img
              src={logo}
              alt="airbnb-logo"
              className="logo"
            />
          </Link>
          <div className=" search-bar-lg">
            <div className="text-bold text-bold-pd">Anywhere</div>
            <span className="divider"></span>
            <div className="text-bold">Any week</div>
            <span className="divider"></span>
            <div className="text-faint">Add guests</div>
            <div className="search-icon">
              <FiSearch color="#fff" />
            </div>
          </div>
          <div className="search-bar-sm">
            <div>
              <FiSearch className="bar-search" />
            </div>
            <div className="bar-sm-text">
              <div className="bar-text"> Where to?</div>
              <div className="bar-subtext">
                <div className="text-faint text-bold-pd">Anywhere</div>
                <span className="text-dot"></span>
                <div className="text-faint">Any week</div>
                <span className="text-dot"></span>
                <div className="text-faint">Add guests</div>
              </div>
            </div>
            <div className="bar-filter">
              <img
                src={filter}
                alt="filter"
                className="bar-img"
              />
            </div>
          </div>
          <div className="host-bar-wrapper">
            <div className="host-bar">
              <div className="text-bold host-text">Become a Host</div>
              <div className="host-globe">
                <FiGlobe />
              </div>
              <div
                className="host-logo"
                onClick={() => {
                  setShowLogin((prev) => !prev);
                }}
              >
                <GiHamburgerMenu className="host-ham" />
                <div className="personIconWrapper">
                <IoPersonCircleSharp fontSize={"2.2rem"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Navbar;
