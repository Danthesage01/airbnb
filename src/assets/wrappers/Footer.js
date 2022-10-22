import styled from "styled-components";

const Wrapper = styled.footer`
  height: 4rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  background: var(--clr-white);
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-shadow: 0 0.045rem 0px 0px rgba(0, 0, 0, 0.2);
  .footer-center {
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
`;

export default Wrapper;
