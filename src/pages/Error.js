import React, { useEffect } from "react";
import BackHome from "../components/BackHome";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);
  return (
    <section className="section-center single-project">
      <BackHome />
      <div className="section-title error-title">
        <h2 style={{ color: "#ff385c" }}>Error Page</h2>
        <article className="single-card">
          <div className="single-card-info">
            <p>
              {" "}
              It seems like you missed your way.
              <br />
              Don't fret!
              <br />
              You will be re-directed shortly.
              <br />
              If not, please click on the home button to navigate back home.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Error;