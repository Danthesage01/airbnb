import React from "react";
import {Link, useParams} from "react-router-dom"
import Error from "./Error"
import SingleNavbar from "../components/SingleNavbar";
import Navbar from "../components/Navbar";
import Wrapper from "../assets/wrappers/SinglePage";
import { useGlobalAirbnbContext } from "../context/context";
import SingleCard from "../components/SingleCard";
const SingleCardPage = () => {
  const { listings } = useGlobalAirbnbContext();
  const {id} = useParams()
  const index = id - 1
  const singleList = listings[index]
  if(listings[index] === undefined || listings.length < 1){
    return <Error />
  }
  const {images, title, category } = singleList
  const {sub} = images
  return (
    <div>
      <SingleNavbar />
      <div className="single-bb"></div>
      <div className="single-center ">
        {title}
        <div className="container-center">
          {sub.map((list) => {
            return (
              <SingleCard
                key={list.id}
                {...list}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleCardPage;
