import React from "react";
import CardItem from "./CardItem";
import { useGlobalAirbnbContext } from "../context/context";
const CardsContainer = () => {
  const { listings } = useGlobalAirbnbContext();
  return (
    <div className="section-center">
      <div className="container-center">
        {listings.map((list) => {
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
