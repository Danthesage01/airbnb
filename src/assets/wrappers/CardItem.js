import styled from "styled-components";

const Wrapper = styled.section`
  background: none;
  cursor: pointer;
  .card-img-wrapper {
    position: relative;
    height: 18rem;
    border-radius: var(--borderRadius);
  }
  .card-img {
    height: 18rem;
    width: 100%;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
  }
  .cost {
    font-weight: 500;
  }
  .faint {
    font-weight: 100;
    margin-bottom: 0.3rem;
  }
  .faint p {
    margin-top: -0.3rem;
  }
  .card-circle {
    width: 6px;
    height: 6px;
    border: 1px solid #ccc;
    background: #ccc;
    border-radius: 100%;
    margin: 2px;
  }
  .card-circle:first-child {
    background: white;
  }
  .card-circle-wrapper {
    position: absolute;
    left: 50%;
    bottom: 2%;
    display: flex;
    transform: translateX(-50%);
  }
  .card-heart-wrapper {
    z-index: 5;
    font-size: 1.8rem;
    position: absolute;
    right: 6%;
    top: 3%;
    color: var(--clr-white);
  }
  .heart-like {
    color: var(--clr-airbnb);
  }
  .footer a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Wrapper;
