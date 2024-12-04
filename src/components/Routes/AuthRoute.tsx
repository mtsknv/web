import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../Auth/AuthContext";

const AuthRoute = () =>{
    const { isAuthenticated } = useAuth();    
    return isAuthenticated ?  <Navigate to='/dialogs'/> : <Outlet/> 
}

export default AuthRoute