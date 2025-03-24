import { useSelector } from "react-redux";
 import { Navigate, Outlet } from "react-router-dom";
 import { useEffect, useState } from "react";
 import { useDispatch } from "react-redux";
 import { logout } from "./authSlice";
 
 const AuthRoutes = () => {
   const { token } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const [isChecking, setIsChecking] = useState(true);
 
   useEffect(() => {
     const checkToken = async () => {
       if (!token) {
         setIsChecking(false);
         dispatch(logout());
         return;
       }
       setIsChecking(false);
     };
 
     checkToken();
   }, [token, dispatch]);
 
   if (isChecking) return <div>Loading...</div>;
   return token ? <Outlet /> : <Navigate to="/signin" />;
 };
 
 export default AuthRoutes;