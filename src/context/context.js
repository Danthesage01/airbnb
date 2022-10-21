import React, { useContext, createContext, useState } from "react";
import data from "../data";
import shared from "../assets/images/shared.png";
// import { SiHomeadvisor } from "react-icons/si";

const AirbnbContext = createContext();

const AirbnbProvider = ({ children }) => {
  const [listing, setListing] = useState(data);

  const listingCategories = listing.reduce(
    (acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    },
    ["Shared homes"]
  );
  const listingIcons = listing.reduce(
    (acc, item) => {
      if (!acc.includes(item.icon)) {
        acc.push(item.icon);
      }
      return acc;
    },
    ["/imgs/shared.png"]
  );

  console.log(listingIcons, listingCategories);
  const [categories, setCategories] = useState(listingCategories);
  const [icons, setIcons] = useState(listingIcons);

  console.log(categories.flat())
  const [stateCategory, setCategory] = useState("Shared homes");

  const handleClick = (e, category) => {
    setCategory(e.target.textContent);
    filterProjects(category);
  };
  const filterProjects = (cat) => {
    if (cat === "Shared homes") {
      setListing(data);
      return;
    }
    let newListing = [...data];
    newListing = newListing.filter((project) => project.category === cat);
    setListing(newListing);
  };

  return (
    <AirbnbContext.Provider
      value={{ listing, categories, handleClick, setCategories, stateCategory, icons, setIcons }}
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
