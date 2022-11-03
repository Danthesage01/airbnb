import React from "react";
import { CardsContainer, Footer } from "../components";
import NavbarHero from "../components/NavbarHero";
const Home = () => {
  return (
    <div>
      <NavbarHero />
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default Home;
