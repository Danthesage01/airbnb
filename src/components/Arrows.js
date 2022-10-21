import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      // style={{ color: "red", marginLeft: "45px" }}
      className={
        disabled ? "move-hide-opacity" : "hero-move-btn move-show-opacity"
      }
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollPrev()}
      style={{color: "red"}}
      className="hero-btn-lt"
    >
      <HiChevronLeft />
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollNext()}
    >
      <HiChevronRight />
    </Arrow>
  );
}
