import React, { useState } from "react";
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";


export const CarouselItem = ({ url, id, children, width }) => {
  const navigate = useNavigate();
  return (
    <div
      className="carousel-item"
      onClick={() => navigate(`/${id}`)}
    >
      <img
        className="carousel-img"
        src={url}
        alt="url"
        style={{ width: width }}
      />
    </div>
  );
};

const Carousel = ({ children, sub }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [main, setMain] = useState(sub[0].url);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <div
      {...handlers}
      className="carousel"
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              onClick={() => updateIndex(index)}
              className={`${
                index === activeIndex
                  ? "card-circle card-circle-active"
                  : "card-circle"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
