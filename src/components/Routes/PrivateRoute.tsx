import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../Auth/AuthContext";

const PrivateRoute = () =>{
    const { isAuthenticated } = useAuth();    
    return isAuthenticated ? <Outlet/> : <Navigate to='/' />
}

export default PrivateRoute