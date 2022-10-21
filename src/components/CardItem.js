import React from "react";
import { FaStar } from "react-icons/fa";
import Wrapper from "../assets/wrappers/CardItem";
import { formatPrice } from "../context/context";
const CardItem = (list) => {
  const { images, cost, dates, host, title, rating} = list;
  return (
    <Wrapper list={list}>
      <div className="card-img-wrapper">
        <img
          src={images.main}
          alt={title}
          className="card-img"
          onClick={() => console.log("clicked img")}
        />
      </div>
      <footer className="footer">
        <div className="card-title">
          <h4>{title}</h4>
          <span>
            <FaStar fontSize={"0.8rem"} /> {rating.toFixed(1)}
          </span>
        </div>
        <div className="faint">
          <p>{host}</p>
          <p>{dates}</p>
        </div>
        <div>
          <span className="cost">{formatPrice(cost)}</span>
          <span> night</span>
        </div>
      </footer>
    </Wrapper>
  );
};

export default CardItem;
