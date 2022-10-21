import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useGlobalAirbnbContext } from "../context/context";
export function CardIcon({ itemId, category, icon }) {
  const visibility = React.useContext(VisibilityContext);
  // eslint-disable-next-line
  const visible = visibility.isItemVisible(itemId);
  const { stateCategory, handleClick } = useGlobalAirbnbContext();
  
  return (
    <div
      role="button"
      className={"hero-card-icon"}
      tabIndex={0}
      onClick={(e) => handleClick(e, category)}
    >
      <img
        className="hero-icon"
        src={icon}
        alt="i"
      />
      <div
        className={
          category === stateCategory ? "hero-category active" : "hero-category "
        }
      >
        {category}
      </div>
    </div>
  );
}
