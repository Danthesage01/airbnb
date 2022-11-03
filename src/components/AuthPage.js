import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalAirbnbContext } from "../context/context";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import apple from "../assets/images/apple.png";
import email from "../assets/images/email.png";
const AuthPage = () => {
  const { closeAuthModal } = useGlobalAirbnbContext();
  return (
    <Wrapper className="authPageInner">
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
            <input
              type="text"
              placeholder="Country/Region"
              className="form-input"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="form-input2"
            />
          </div>
          <small className="form-small">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.{" "}
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
            onClick={(e) => e.preventDefault()}
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
            alt="google"
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
            alt="google"
            className="input-img"
          />
          continue with Apple
        </button>
        <button className="other-input-btn">
          <img
            src={email}
            alt="google"
            className="input-img"
          />
          continue with Email
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .authPageInner {
    display: static;
    width: 600px;
    height: 700px;
    background: var(--clr-white);
    margin: 2rem auto;
    border-radius: var(--borderRadius);
    padding: 1rem 0;
  }
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
    /* margin: 0.3rem 0; */
  }
  .form-input {
    width: 100%;
    border: none;
    /* border-bottom: 1px solid #dfdfdf; */
    border-radius: var(--borderRadius);
    padding: 1.1rem;
    margin-bottom: 0.05rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .form-input2 {
    width: 100%;
    border: none;
    border-top: 1px solid #dfdfdf;
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
    padding: 1rem;
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
  .other-input-btn:last-child {
    margin-bottom: 1rem;
  }
  .input-img {
    width: 100%;
    height: 1rem;
    object-fit: cover;
  }
`;

export default AuthPage;
