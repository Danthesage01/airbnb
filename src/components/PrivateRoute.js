import { Navigate, Outlet } from "react-router-dom";
import UserAuthProvider from "../context/UserAuthContext";

const PrivateRoute = () => {
  const { userLogin } = UserAuthProvider();
  return userLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
