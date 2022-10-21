import styled from "styled-components";

const Wrapper = styled.section`
  .container-center {
    padding-top: 12rem;
    padding-bottom: 5rem;
    display: grid;
    row-gap: 2rem;
  }
  @media screen and (min-width: 742px) {
    .container-center {
      padding-top: 12rem;
      padding-bottom: 5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 3rem;
      column-gap: 1.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .container-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1170px) {
    .container-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Wrapper;
