import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTimes, FaChevronLeft } from "react-icons/fa";
import { useGlobalAirbnbContext } from "../context/context";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import apple from "../assets/images/apple.png";
import email from "../assets/images/email.png";
import chevronD from "../assets/images/chevronD.png";
import Input, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import lookupCountry from "../utils/lookupCountry";
import { useGlobalAuthContext } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  <select
    {...rest}
    value={value}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{labels.ZZ}</option>
    {getCountries().map((country) => (
      <option
        key={country}
        value={country}
      >
        {labels[country]} (+{getCountryCallingCode(country)})
      </option>
    ))}
  </select>
);

const AuthPage = () => {
  const { closeAuthModal } = useGlobalAirbnbContext();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const { setUpRecaptha, setUserLogin } = useGlobalAuthContext();
  const [visible, setVisible] = useState(false);
  const [OTP, setOTP] = useState("");
  const [confirmOTP, setConfirmOTP] = useState("");

  const navigate = useNavigate();
  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log(OTP);
    if (OTP === "" || OTP === null) return;
    try {
      await confirmOTP.confirm(OTP);
      setUserLogin(true)
      closeAuthModal();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  async function handleNavigator(pos) {
    const { latitude, longitude } = pos.coords;
    const userCountryCode = await lookupCountry({ latitude, longitude });
    setCountry(userCountryCode);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () =>
      console.warn("permission was rejected")
    );
  }, []);

  const getOTP = async (e) => {
    e.preventDefault();
    if (phoneNumber === "" || phoneNumber === undefined) return;
    try {
      const res = await setUpRecaptha(phoneNumber);
      setConfirmOTP(res);
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
    // console.log(phoneNumber);
  };
  const goBack = async (e) => {
    e.preventDefault();
    setConfirmOTP("");
    setVisible(false);
    setPhoneNumber("");
  };

  return (
    <Wrapper
      className={visible ? "authPageInner authPageInner2" : "authPageInner"}
    >
      <div style={{ display: visible ? "none" : "block" }}>
        <div className="authPage-header">
          <div
            className="authPage-header-btn"
            onClick={() => closeAuthModal()}
          >
            <FaTimes fontSize={"1.1rem"} />
          </div>
          <p>Log in or sign up</p>
        </div>
        <div className="line-break" />
        <div className="authPage-main">
          <h4>Welcome to Airbnb</h4>
          <form className="authPage-form">
            <div className="authPage-input">
              <CountrySelect
                labels={en}
                name="countrySelect"
                className="form-input"
                value={country}
                onChange={setCountry}
              />

              <Input
                placeholder="Phone number"
                className="form-input2"
                name="phoneNumber"
                country={country}
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </div>
            <div
              id="recaptcha-container"
              className="captcha-body"
            ></div>
            <small className="form-small">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <a
                href="https://www.airbnb.com/help/article/2855"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
            </small>
            <button
              type="submit"
              onClick={getOTP}
              className="form-input-btn"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="authPage-divider">
          <div className="divider-break"></div>
          <div>or</div>
          <div className="divider-break"></div>
        </div>
        <div className="authPage-footer">
          <button className="other-input-btn">
            <img
              src={facebook}
              alt="facebook"
              className="input-img"
            />{" "}
            continue with Facebook
          </button>
          <div className="other-input-btn">
            <img
              src={google}
              alt="google"
              className="input-img"
            />{" "}
            continue with Google
          </div>
          <button className="other-input-btn">
            <img
              src={apple}
              alt="apple"
              className="input-img"
            />
            continue with Apple
          </button>
          <button className="other-input-btn">
            <img
              src={email}
              alt="email"
              className="input-img"
            />
            continue with Email
          </button>
        </div>
      </div>
      <div style={{ display: visible ? "block" : "none" }}>
        <div className="authPage-header">
          <div
            className="authPage-header-btn"
            onClick={goBack}
          >
            <FaChevronLeft fontSize={"1.1rem"} />
          </div>
          <p>Confirm your number</p>
        </div>
        <div className="line-break" />
        <form className="form-OTP">
          <p href="#">Enter the code we sent over SMS to {phoneNumber}</p>
          <input
            type="text"
            placeholder="- - - - - -"
            maxLength={6}
            className="form-input-OTP"
            onChange={(e) => setOTP(e.target.value)}
          />

          <div className="more-options">
            <p
              href=""
              className="more-text"
            >
              More options
            </p>
            <button
              type="submit"
              onClick={verifyOTP}
              className="form-input-btn-OTP"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .authPageInner {
    display: none;
  }
  .authPageInner2 {
    display: none;
  }
  @media screen and (min-width: 742px) {
    /* .authPageInner {
      display: static;
      width: 600px;
      min-height: 700px;
      background: var(--clr-white);
      margin: 2rem auto;
      border-radius: var(--borderRadius);
      padding: 1rem 0;
    } */
    /* .authPageInner2 {
      height: 500px;
      display: block;
    } */
    .authPage-header {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      padding: 1.5rem;
    }
    .authPage-header p {
      font-weight: 500;
      font-size: 1rem;
      text-align: center;
    }
    .authPage-header-btn {
      cursor: pointer;
    }
    .authPage-main {
      padding: 0.75rem 1.5rem;
    }
    .authPage-main h4 {
      font-size: 1.5rem;
    }
    .authPage-input {
      border: 1px solid #222;
      border-radius: var(--borderRadius);
      margin-top: 1.5rem;
    }
    .line-break {
      width: 100%;
      height: 0.005rem;
      background: #dfdfdf;
      margin: 0.3rem 0;
    }
    .divider-break {
      width: 100%;
      height: 0.005rem;
      background: #dfdfdf;
    }
    .form-input {
      width: 100%;
      border: none;
      border-radius: var(--borderRadius);
      font-size: 1rem;
      padding: 1.2rem;
      padding-right: 1rem;
      margin-bottom: 0.05rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-image: url(${chevronD});
      background-repeat: no-repeat, repeat;
      background-position: right 0.7rem top 50%, 0 0;
      background-size: 0.7rem auto, 100%;
    }
    .form-input2 {
      width: 100%;
      border: none;
      font-size: 1rem;
      border-top: 1px solid #222;
      border-radius: var(--borderRadius);
      padding: 1.1rem;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .form-input:focus,
    .form-input2:focus {
      border-radius: var(--borderRadius);
    }
    .form-input-btn {
      margin-top: 0.5rem;
      display: block;
      width: 100%;
      padding: 1rem;
      border: none;
      outline: none;
      border-radius: var(--borderRadius);
      cursor: pointer;
      background: var(--clr-airbnb);
      color: var(--clr-white);
      font-size: 1rem;
      letter-spacing: 0.05rem;
    }
    .form-small {
      font-size: 0.85rem;
    }
    .form-small a {
      text-decoration: underline;
    }
    .authPage-divider {
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      column-gap: 1rem;
      margin-bottom: 0;
    }
    .authPage-footer {
      padding: 0 1.5rem;
    }
    .other-input-btn {
      margin: 0.75rem 0;
      display: block;
      width: 100%;
      padding: 0.65rem;
      border: 1px solid #222;
      border-radius: var(--borderRadius);
      cursor: pointer;
      background: transparent;
      font-size: 1rem;
      letter-spacing: 0.05rem;
      text-align: center;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    /* .other-input-btn:last-child {
      margin-bottom: 1rem;
    } */
    .input-img {
      width: 100%;
      height: 1rem;
      object-fit: cover;
    }
    .captcha-body {
      margin: 0.5rem 0;
      border-radius: var(--borderRadius);
    }
    /* OTP */
    .form-OTP {
      padding: 1.5rem;
    }
    .form-OTP p {
      letter-spacing: 0.07rem;
    }

    .form-input-OTP {
      width: 30%;
      margin: 1rem 0;
      border: none;
      font-size: 1rem;
      border: 1px solid #222;
      border-radius: var(--borderRadius);
      padding: 1rem;
      letter-spacing: 0.8rem;
    }
    .form-input-OTP::placeholder {
      letter-spacing: 0.4rem;
    }

    .more-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .more-text {
      text-decoration: underline;
      align-self: flex-end;
      cursor: pointer;
    }
    .form-input-btn-OTP {
      display: block;
      padding: 0.875rem 1.1rem;
      border: none;
      outline: none;
      border-radius: var(--borderRadius);
      cursor: pointer;
      background: #000;
      color: var(--clr-white);
      font-size: 1rem;
      letter-spacing: 0.05rem;
    }
  }
`;

export default AuthPage;
