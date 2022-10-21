import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-white);
  z-index: 2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  .hero-card-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    column-gap: 0;
    margin: 0;
    width: 80px;
    user-select: none;
  }
  .hero-global {
    display: flex;
    max-width: 100vw;
    align-items: center;
    justify-content: space-between;
  }
  .hero-gscroll {
    width: 100%;
  }

  .hero-gbtn {
    display: none;
  }
  .hero-icon {
    width: 1rem;
  }
  .hero-category {
    margin-top: -0.3rem;
    display: block;
    font-size: 0.6rem;
    opacity: 1;
  }
  .hero-btn {
    display: none;
  }
  .hero-btn-img {
    height: 0.8rem;
  }
  .hero-move-btn {
    display: none;
  }
  .move-hide-opacity {
    opacity: 0;
  }
  .active {
    /* width: 6rem;
    height: .1rem; */
    padding-bottom: 0.2rem;
    text-align: center;
    border-bottom: 1px solid black;
  }

  @media screen and (min-width: 742px) {
    padding-bottom: 0rem;
    border-bottom: none;
    .hero-card-icon {
      margin: 0 1px;
      width: 130px;
    }
    .active {
      /* width: 6rem;
    height: .1rem; */
      padding-bottom: 0.6rem;
      text-align: center;
      border-bottom: 3px solid black;
    }
    .hero-gscroll {
      align-content: flex-start;
      /* margin-left: -2rem; */
      width: 90%;
    }
    .hero-gbtn {
      justify-content: flex-end;
      width: 10%;
    }
    .hero-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      background: white;
      gap: 0.5rem;
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 0.8rem;
      border: none;
      font-size: 0.7rem;
    }
    .hero-move-btn {
      cursor: pointer;
      background: #fff;
      border-radius: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      right: 1%;
      z-index: 33333333;
      width: 2rem;
      height: 2rem;
      user-select: none;
      border: none;
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      margin-top: 0.5rem;
    }
    .move-show-opacity {
      opacity: 1;
    }
    .move-hide-opacity {
      opacity: 0;
    }
    /* .hero-btn-lt{
      left: -10%;
      height: 150%;
    } */
  }
  @media screen and (min-width: 992px) {
    .hero-card-icon {
      padding-top: 0.7rem;
    }
    .hero-icon {
      width: 1.2rem;
    }
    .hero-category {
      margin-top: -0.1rem;
      display: block;
      font-size: 0.9rem;
      opacity: 1;
    }
  }
`;

export default Wrapper;
