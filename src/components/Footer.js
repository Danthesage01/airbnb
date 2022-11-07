import React from "react";
import Wrapper from "../assets/wrappers/Footer";
import { FiDollarSign, FiGlobe, FiChevronUp } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaAirbnb } from "react-icons/fa";
import { useLocation, useNavigate} from "react-router-dom"
import { useGlobalAuthContext } from "../context/UserAuthContext";

const Footer = () => {
 const navigate = useNavigate()
 const location = useLocation()

 const pathMatchRoute = (route) =>{
  if(route === location.pathname){
    return true
  }
 }

  const { userLogin } = useGlobalAuthContext();

  return (
    <Wrapper>
      <div className="section-center">
        {userLogin ? (
          <div className="sm-footer-center">
            <div
              className="navbarListItem"
              onClick={() => navigate("/")}
            >
              <FiSearch
                fontSize={"1.2rem"}
                className={pathMatchRoute("/") ? "activeIcon" : null}
              />
              <p
                className={
                  pathMatchRoute("/")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Explore
              </p>
            </div>
            <div className="navbarListItem">
              <FiHeart fontSize={"1.2rem"} />
              <p
                className={
                  pathMatchRoute("/wishlists")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Wishlists
              </p>
            </div>
            <div className="navbarListItem">
              <FaAirbnb fontSize={"1.2rem"} />
              <p
                className={
                  pathMatchRoute("/trips")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Trips
              </p>
            </div>
            <div className="navbarListItem">
              <BiMessage fontSize={"1.2rem"} />
              <p
                className={
                  pathMatchRoute("/inbox")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Inbox
              </p>
            </div>
            <div
              className="navbarListItem"
              onClick={() => navigate("/profile")}
            >
              <CgProfile
                fontSize={"1.2rem"}
                className={pathMatchRoute("/profile") ? "activeIcon" : null}
              />
              <p
                className={
                  pathMatchRoute("/profile")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Profile
              </p>
            </div>
          </div>
        ) : (
          <div className="sm-footer-center">
            <div
              className="navbarListItem"
              onClick={() => navigate("/")}
            >
              <FiSearch
                fontSize={"1.2rem"}
                className={pathMatchRoute("/") ? "activeIcon" : null}
              />
              <p
                className={
                  pathMatchRoute("/")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Explore
              </p>
            </div>
            <div className="navbarListItem">
              <FiHeart fontSize={"1.2rem"} />
              <p
                className={
                  pathMatchRoute("/wishlists")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Wishlists
              </p>
            </div>
            <div
              className="navbarListItem"
              onClick={() => navigate("/login")}
            >
              <CgProfile
                fontSize={"1.2rem"}
                className={pathMatchRoute("/login") ? "activeIcon" : null}
              />
              <p
                className={
                  pathMatchRoute("/login")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Log in
              </p>
            </div>
          </div>
        )}
        <div className="bg-footer-center">
          <div className="start-footer">
            <p className="footer-date">
              &copy; {new Date().getFullYear()} Airbnb, Inc.
            </p>
            <div className="footer-info">
              <p> Privacy</p>
              <div className="text2-dot"></div>
              <p> Terms</p>
              <div className="text2-dot"></div>
              <p> Sitemap</p>
              <div className="text2-dot"></div>
              <p> Destinations</p>
            </div>
          </div>
          <div className="end-footer">
            <div className="end-footer-info">
              <span className="e-icons">
                <FiGlobe />
              </span>
              <span>English (US)</span>
            </div>
            <div className="end-footer-info">
              <span className="e-icons">
                <FiDollarSign />
              </span>
              <span>USD</span>
            </div>
            <div className="end-footer-info">
              <span>Support & Resources</span>
              <span className="e-icons e-icons-last">
                <FiChevronUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
