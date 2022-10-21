import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-white);
  /* box-shadow: 0 0.045rem 0px 0px rgba(0, 0, 0, 0.2); */
  .logo {
    display: none;
  }
  .host-bar {
    display: none;
  }
  .nav-center {
    display: grid;
    align-items: center;
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
    font-weight: 600;
  }
  .text-faint {
    color: rgba(0, 0, 0, 0.5);
  }
  .divider {
    padding: 0.8rem 0.1px;
    background: rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 742px) {
    border-bottom: ${(props) =>
      props.home ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};

      /* background: ${props => props.home ? "red" : "yellow"}; */
    .search-bar-sm {
      display: none;
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
      padding: 0.4rem 0;
      min-width: 22vw;
      padding-left: 1.5rem;
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
      grid-template-columns: 1fr 1fr 1fr;
    }
    .host-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
    }
  }
`;

export default Wrapper;
