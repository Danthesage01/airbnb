import styled from "styled-components";

const Wrapper = styled.nav`
  height: 14rem;
  position: fixed;
  z-index: 8;
  width: 100%;
  .nav {
    height: var(--nav-height);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clr-white);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .logo {
    display: none;
  }
  .host-bar {
    display: none;
  }
  .nav-center {
    display: grid;
    align-items: center;
    justify-content: center;
    /* gap: 0.5rem; */
    grid-template-columns: 1fr;
  }
  .search-bar-lg {
    display: none;
  }
  .search-bar-sm {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 0px 0.9px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 60px;
    padding: 0.5rem 0.4rem;
    padding-left: 1rem;
    cursor: pointer;
  }
  .bar-sm-text {
    display: flex;
    flex-direction: column;
  }

  .bar-search {
    font-weight: 800;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    align-self: center;
  }
  .bar-text {
    font-weight: 500;
    margin-bottom: -2px;
  }
  .bar-subtext {
    display: flex;
    column-gap: 0.3rem;
    margin-top: 0;
    padding-top: 0;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .text-dot {
    height: 2px;
    width: 2px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.4);
    align-self: center;
    margin-top: 0.1rem;
  }
  .bar-filter {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    display: grid;
    place-items: center;
    margin-right: 0.3rem;
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  .bar-img {
    width: 50%;
  }

  .host-logo {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 0.2rem 0.4rem;
  }
  .host-ham {
    padding-left: 0.3rem;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .search-icon {
    background: var(--clr-airbnb);
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    display: grid;
    place-items: center;
    /* margin-right: 0.3rem; */
  }

  .text-bold {
    font-weight: 500;
  }
  .text-faint {
    color: rgba(0, 0, 0, 0.5);
  }
  .divider {
    padding: 0.6rem 0.3px;
    background: rgba(0, 0, 0, 0.2);
  }
  .showLoginModal,
  .hideLoginModal,
  .showAuthPage,
  .hideAuthPage {
    display: none;
  }

  @media screen and (min-width: 742px) {
    border-bottom: ${(props) =>
      props.home ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};

    /* background: ${(props) => (props.home ? "red" : "yellow")}; */
    .search-bar-sm {
      display: none;
    }
    .host-bar-wrapper {
      /* display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      /* gap: 1rem; */
      /* justify-self: center;  */
    }
    .host-bar {
      display: flex;

      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    }
    .host-logo {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      padding: 0.2rem 0.4rem;
    }
    .host-ham {
      padding-left: 0.3rem;
      font-size: 1.2rem;
      font-weight: 300;
    }
    .host-text,
    .host-logo,
    .host-globe {
      cursor: pointer;
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100px;
    }
    .nav-center {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, auto);
    }
    .search-bar-lg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid var(--clr-white);
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 25px;
      text-align: center;
      padding: 0.4rem 0.2rem;
      min-width: 10vw;
      /* padding-left: 1rem; */
    }
    .search-bar-lg:hover {
      box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (min-width: 1170px) {
    .nav-center {
      display: grid;
      align-items: center;
      justify-content: space-between;
      grid-template-columns: 1fr auto 1fr;
    }
    .host-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
    }
    .search-bar-lg {
      column-gap: 0.7rem;
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      text-align: center;
      padding: 0.4rem 0.9rem;
      min-width: 5vw;
    }
    .text-bold-pd {
      padding-left: 0.7rem;
    }
  }

  .hero {
    background: var(--clr-white);
    z-index: 2;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
    padding: 0;
    margin: 0;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
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
    padding-bottom: 0.3rem;
  }
  .hero-category {
    margin-top: -0.1rem;
    display: block;
    font-size: 0.6rem;
    opacity: 1;
  }
  .hero-btn {
    display: none;
  }
  .hero-btn-img {
    height: 0.75rem;
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
      padding-bottom: 0.6rem;
      text-align: center;
      border-bottom: 3px solid black;
    }
    .hero-gscroll {
      align-content: flex-start;
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
      gap: 0.8rem;
      box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 0.8rem 0.5rem;
      border: none;
      font-size: 0.8rem;
      margin-right: 0.3rem;
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
      z-index: 2;
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
    .hideLoginModal {
      display: none;
    }
    .showLoginModal {
      display: block;
      width: 250px;
      height: 210px;
      position: absolute;
      background: var(--clr-white);
      box-shadow: 0px 0px 1px 1.2px rgba(0, 0, 0, 0.1);
      z-index: 8;
      top: 4.5rem;
      right: 5.25rem;
      border-radius: var(--borderRadius);
      padding-bottom: 1rem;
    }
    .signupP {
      padding: 0.5rem 0.7rem;
      font-weight: 500;
      margin-top: 0.2rem;
    }
    .loginP {
      padding: 0.5rem 0.7rem;
      padding-top: 0;
    }
    .loginPa {
      padding: 0.5rem 0.7rem;
    }
    .line-break {
      width: 100%;
      height: 0.005rem;
      background: #dfdfdf;
      margin: 0.3rem 0;
    }
    .showLoginModal p:hover {
      background: #f4f4f4;
      cursor: pointer;
    }
    .hideAuthPage {
      display: none;
    }
    .showAuthPage {
      display: block;
      scroll-behavior: unset;
      width: 100vw;
      height: 100vw;
      position: fixed;
      scroll-snap-stop: unset;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 1px 1.2px rgba(0, 0, 0, 0.1);
      z-index: 85;
      top: 0;
      right: 0;
      padding-bottom: 1rem;
    }
    .authPageInner {
      display: static;
      width: 600px;
      height: 700px;
      background: var(--clr-white);
      margin: 2rem auto;
      border-radius: var(--borderRadius);
    }
    .authPage-header {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      padding: 1.5rem;
    }
    .authPage-header p {
      font-weight: 500;
      font-size: 1.1rem;
      text-align: center;
    }
    .authPage-header-btn {
      cursor: pointer;
    }
    .authPage-main {
      padding: 1.5rem;
    }
    .authPage-main h4 {
      font-size: 1.5rem;
    }
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
