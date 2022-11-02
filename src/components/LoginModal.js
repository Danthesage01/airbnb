import React from 'react'
import styled from 'styled-components';

const LoginModal = () => {

  return (
    <Wrapper className='section-center'>
      <div>Sign up</div>
      <div>Login</div>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  padding: 2rem;
  background: var(--clr-white);
  box-shadow: 0 0.045rem 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 5500000000006755;
 
`;
export default LoginModal