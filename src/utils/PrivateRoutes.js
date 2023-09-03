import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/authSelectors";

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/login' />
    );
}

export default PrivateRoutes;