import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { MdOutlineIosShare } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Error from "./Error";
import SingleNavbar from "../components/SingleNavbar";

import data from "../data";
const SingleCardPage = () => {
  const [like, setLike] = useState(false);
  const { id } = useParams();
  const index = id - 1;

  const [slideIndex, setSlideIndex] = useState(0);

  if (data[index] === undefined || data.length < 1) {
    return <Error />;
  }

  const singleList = data[index];
  const { images, title, category, host, rating } = singleList;
  const reviews = Math.ceil(rating * 8);
  document.title = title;
  const { sub } = images;
  const image = sub[slideIndex].url;

  const chechIndex = (number) => {
    if (number > sub.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const moveNext = () => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return chechIndex(newIndex);
    });
  };

  return (
    <div >
      <div className="single-nav">
        <SingleNavbar />
      </div>
      <div className="single-bb"></div>
      <div className="single-nav-img">
        <img
          src={image}
          alt="one"
          className="single-img"
        />
        <div className="single-icon-start">
          <Link
            to="/"
            className="single-icon-icon"
          >
            <FaChevronLeft fontSize="1rem" />
          </Link>
        </div>
        <div className="single-icon-end">
          {/* <div className="single-icon-icon">
            <MdOutlineIosShare fontSize="1rem" />
          </div> */}
          <div
            className={
              like ? "single-icon-icon heart-like" : "single-icon-icon"
            }
            onClick={() => setLike(!like)}
          >
            {like ? <AiFillHeart /> : <AiOutlineHeart fontSize="1rem" />}
          </div>
        </div>
        <div className="single-text-text">
          <h6 className="single-title">
            <span>
              <BsTranslate />
            </span>
            {title}
          </h6>
          <div className="start-subtitle">
            <span>
              <FaStar /> {rating.toFixed(1)}{" "}
            </span>
            <div className="text2-dot"></div>
            <span className="underline"> {reviews} reviews </span>
            <div className="text2-dot"></div>
            <span className="underline">
              {host}, {category}{" "}
            </span>
          </div>
        </div>
        <div className="single-move-next">
          <div
            className="single-icon-icon"
            onClick={() => moveNext()}
          >
            <FaChevronRight fontSize="1rem" />
          </div>
        </div>
        <div className="single-move-count">
          <p >
            {slideIndex + 1}/{sub.length}
          </p>
        </div>
      </div>
      <div className="single-center single-condition">
        <div className="single-info">
          <h4 className="single-title">
            <span>
              <BsTranslate />
            </span>
            {title}
          </h4>
          <div className="single-subtitle">
            <div className="start-subtitle">
              <span>
                <FaStar /> {rating.toFixed(1)}{" "}
              </span>
              <div className="text2-dot"></div>
              <span className="underline"> {reviews} reviews </span>
              <div className="text2-dot"></div>
              <span className="underline">
                {host}, {category}{" "}
              </span>
            </div>
            <div className="end-subtitle">
              <span className="e-icons">
                <MdOutlineIosShare />
              </span>
              <span className="underline">share</span>

              <span className="e-icons">
                <AiOutlineHeart />
              </span>
              <span className="underline">save</span>
            </div>
          </div>
        </div>
        <div className="single-img-container">
          <div className="imageOne">
            <div className="single">
              <img
                src={sub[0].url}
                alt="one"
                className="single-img single-img-one"
              />
            </div>
          </div>
          <div className="imageTwo">
            <div className="single">
              <img
                src={sub[1].url}
                alt="two"
                className="single-img"
              />
            </div>
          </div>
          <div className="imageThree">
            <div className="single">
              <img
                src={sub[2].url}
                alt="three"
                className="single-img single-img-three"
              />
            </div>
          </div>
          <div className="imageFour">
            <div className="single">
              <img
                src={sub[3].url}
                alt="four"
                className="single-img "
              />
            </div>
          </div>
          <div className="imageFive">
            <div className="single">
              <img
                src={sub[4].url}
                alt="five"
                className="single-img single-img-five"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;
