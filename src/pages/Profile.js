import React from 'react'
import { Footer } from "../components";
import { useGlobalAuthContext } from "../context/UserAuthContext";
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';


const Profile = () => {
  const { userLogin, setUserLogin } = useGlobalAuthContext();
const navigate = useNavigate()
   const logoutUser = () => {
    navigate("/")
     setUserLogin(false);
   };
  return (
    <div>
      <Wrapper className="showAuthPage">
        <p className="signupP">Messages</p>
        <p className="signupP">Notifications</p>
        <p className="signupP">Trips</p>
        <p className="signupP">Wishlists</p>
        <div className="line-break" />
        <p className="loginPa">Host your home</p>
        <p className="loginPa">Host an experience</p>
        <p className="loginPa">Account</p>
        <div className="line-break" />
        <p className="loginPa">Help</p>
        <button
          className="profile-btn"
          onClick={() => logoutUser()}
        >
          Log out
        </button>
      </Wrapper>
      <Footer />
    </div>
  );
}


const Wrapper = styled.div`
 margin-top: 2rem;
 p{
  
  font-size: 1.5rem;
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
  .profile-btn{
   padding: 1rem;
   font-size: 1.3rem;
   width: 90%;
   text-align: center;
   margin: 0 1rem;
   border-radius: var(--borderRadius);
   color: #222;
   margin-top: 3rem;
   border: 1px solid #222;
  }
`;

export default Profile