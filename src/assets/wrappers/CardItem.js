import styled from "styled-components";

const Wrapper = styled.section`
  background: none;
  .card-img-wrapper {
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
`;

export default Wrapper;
