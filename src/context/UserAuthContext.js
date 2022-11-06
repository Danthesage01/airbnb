import React, { useState, useEffect, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import {auth } from "../firebase.config"
const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState(false);

  const setUpRecaptha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier)
  };

  return (
    <UserAuthContext.Provider value={{ setUpRecaptha, userLogin, setUserLogin }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(UserAuthContext);
};

export default UserAuthProvider;
