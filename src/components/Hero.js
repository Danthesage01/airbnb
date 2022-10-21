import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import Wrapper from "../assets/wrappers/Hero";
import filter from "../assets/images/filter.svg";
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

const Hero = () => {
  const { categories, icons } = useGlobalAirbnbContext();
 
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <Wrapper>
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
              const icon= icons[itemIndex]
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
    </Wrapper>
  );
};

export default Hero;
