import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

const Review = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const { image, text, brand, name } = data[slideIndex];
  const [isReadMore, setIsReadMore] = useState(false);

  const checkIndex = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextBtn = () => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };
  const prevBtn = () => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };
  const moveSlideDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <aside className="card-header">
        <div className="img-container">
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className="p-container">
          <p>
            {isReadMore ? text : `${text.substring(0, 80)}...`}
            <button onClick={() => setIsReadMore(!isReadMore)}>
              {isReadMore ? "see less" : "read more"}
            </button>
          </p>
        </div>
      </aside>
      <aside className="card-header">
        <div className="color-container">
          {data.map((item, index) => {
            return (
              <div
                onClick={() => moveSlideDot(index)}
                className={
                  slideIndex === index ? "color-span active" : "color-span"
                }
                key={item.id}
              ></div>
            );
          })}
        </div>
        <div className="p-container">
          <h4 className="name">{name}</h4>
          <h4 className="brand">{brand}</h4>
        </div>
      </aside>
      <div className="line-break"></div>
      <footer>
        <button
          className="btn-footer"
          onClick={prevBtn}
        >
          {" "}
          <FaChevronLeft />{" "}
        </button>
        <button
          className="btn-footer"
          onClick={nextBtn}
        >
          {" "}
          <FaChevronRight />{" "}
        </button>
      </footer>
    </>
  );
};

export default Review;
