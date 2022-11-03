import React from "react";
import { CardsContainer, Footer } from "../components";
import AuthPage from "../components/AuthPage";
import NavbarHero from "../components/NavbarHero";
import { useGlobalAirbnbContext } from "../context/context";
const Home = () => {
  const { openShowModal, showAuthPage } = useGlobalAirbnbContext();
  return (
    <React.Fragment>
      <div style={{}}>
        <NavbarHero />
        <CardsContainer />
        <Footer />
      </div>
      ;
    </React.Fragment>
  );
};

export default Home;
