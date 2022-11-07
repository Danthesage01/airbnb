import styled from "styled-components";

const Wrapper = styled.footer`
  z-index: 0;
  height: 3.5rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  background: var(--clr-white);
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-shadow: 0 0.045rem 0px 0px rgba(0, 0, 0, 0.2);
  .sm-footer-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .navbarListItem {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbarListItemName,
  .navbarListItemNameActive {
    margin-top: 0.25rem;
    font-size: 14px;
    font-weight: 600;
    color: #8f8f8f;
  }
  .navbarListItemNameActive {
    color: #222;
  }
  .activeIcon{
    color: var(--clr-airbnb);
  }

  .hero-category {
    margin-top: -0.1rem;
    display: block;
    font-size: 0.6rem;
    opacity: 1;
  }
  .bg-footer-center {
    display: none;
  }

  @media screen and (min-width: 742px) {
    .sm-footer-center {
      display: none;
    }
    .bg-footer-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
    .footer-info {
      display: flex;
      gap: 0.5rem;
    }
    .start-footer {
      display: flex;
      justify-content: flex-start;
      gap: 0.6rem;
    }
    .end-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
    }
    .end-footer .e-icons {
      font-size: 1.1rem;
      padding-top: 0.3rem;
      cursor: pointer;
    }
    .end-footer .e-icons-last {
      font-size: 1.5rem;
      padding-top: 0.4rem;
    }
    .end-footer-info {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 500;
    }
  }
`;

export default Wrapper;
