import React from "react";
import CardItem from "./CardItem";
import { useGlobalAirbnbContext } from "../context/context";
const CardsContainer = () => {
  const { listing } = useGlobalAirbnbContext();
  return (
    <div className="section-center">
      <div className="container-center">
        {listing.map((list) => {
          return (
            <CardItem
              role="button"
              key={list.id}
              {...list}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
