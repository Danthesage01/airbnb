import React, { useContext, createContext, useState } from "react";
import data from "../data";

const AirbnbContext = createContext();
const AirbnbProvider = ({ children }) => {
  const [listings, setListings] = useState(data);

  const listingCategories = listings.reduce(
    (acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    },
    ["Shared homes"]
  );
  const listingIcons = listings.reduce(
    (acc, item) => {
      if (!acc.includes(item.icon)) {
        acc.push(item.icon);
      }
      return acc;
    },
    ["/imgs/shared.png"]
  );

  const [categories, setCategories] = useState(listingCategories);
  const [icons, setIcons] = useState(listingIcons);
  const [stateCategory, setCategory] = useState("Shared homes");

  const handleClick = (e, category) => {
    setCategory(e.target.textContent);
    filterProjects(category);
  };
  const filterProjects = (cat) => {
    if (cat === "Shared homes") {
      setListings(data);
      return;
    }
    let newListing = [...data];
    newListing = newListing.filter((project) => project.category === cat);
    setListings(newListing);
  };

  return (
    <AirbnbContext.Provider
      value={{
        listings,
        categories,
        handleClick,
        setCategories,
        stateCategory,
        icons,
        setIcons,
      }}
    >
      {children}
    </AirbnbContext.Provider>
  );
};

export const formatPrice = (price) => {
  const newPrice = Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price / 100);
  return newPrice;
};

export const useGlobalAirbnbContext = () => {
  return useContext(AirbnbContext);
};

export default AirbnbProvider;
