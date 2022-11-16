import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Wrapper from "../assets/wrappers/CardItem";
import { formatPrice } from "../context/context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Carousel, { CarouselItem } from "../Carousel";

const CardItem = (list) => {
  const { images, cost, dates, host, title, rating, id } = list;
  const { sub } = images;
  const [like, setLike] = useState(false);

  return (
    <Wrapper list={list}>
      <div className="card-img-wrapper">
        <Carousel sub={sub}>
          {sub.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                {...item}
              />
            );
          })}
        </Carousel>

        <div
          // className={
          //   like ? "card-heart-wrapper heart-like" : "card-heart-wrapper"
          // }
          className="card-heart-wrapper"
          onClick={() => setLike(!like)}
        >
          {like ? <AiFillHeart className="heart-like" /> : <AiOutlineHeart />}
        </div>
      </div>
      <footer className="footer">
        <Link to={`/${id}`}>
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
        </Link>
      </footer>
    </Wrapper>
  );
};

export default CardItem;
