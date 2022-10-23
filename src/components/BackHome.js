import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
const BackHome = () => {
  return (
    <section className="home-center">
      <div className="home-header">
        <div className="home-icon">
          <Link to="/">
            <AiFillHome color="#222" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BackHome;
