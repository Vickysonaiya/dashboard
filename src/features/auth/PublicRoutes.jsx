import { useSelector } from "react-redux";
 import { Navigate, Outlet } from "react-router-dom";
 
 const PublicRoutes = () => {
   const { user } = useSelector((state) => state.auth);
 
   return user ? <Navigate to="/dashboard" /> : <Outlet />;
 };
 
 export default PublicRoutes;