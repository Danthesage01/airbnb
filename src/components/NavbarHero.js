import Wrapper from "../assets/wrappers/NavbarHero";
import logo from "../assets/images/airbnb.svg";
import { FiSearch, FiGlobe } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoPersonCircleSharp } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import filter from "../assets/images/filter.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
// import data from "../data";
import { CardIcon } from "./CardIcon";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import { useGlobalAirbnbContext } from "../context/context";

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const NavbarHero = () => {
  const [showLogin, setShowLogin] = useState(false);
  console.log(showLogin);

  const { categories, icons } = useGlobalAirbnbContext();
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <Wrapper>
      <div className="nav">
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
                <IoPersonCircleSharp fontSize={"2.2rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="section-center hero-global">
          <div
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
            className="hero-gscroll"
          >
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {categories.map((category, itemIndex) => {
                const icon = icons[itemIndex];
                return (
                  <CardIcon
                    category={category}
                    icon={icon}
                    itemId={itemIndex} // NOTE: itemId is required for track items
                    key={itemIndex}
                  />
                );
              })}
            </ScrollMenu>
          </div>
          <div className=".hero-gbtn">
            <button className="hero-btn">
              <img
                src={filter}
                alt="filter"
                className="hero-btn-img"
              />
              Filters
            </button>
          </div>
        </div>
      </div>
      {showLogin ? (
        <div className="loginModal">
          <div>Sign up</div>
          <div>Login</div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default NavbarHero;
