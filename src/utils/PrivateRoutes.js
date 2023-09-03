import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/authSelectors";

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/register' />
    );
}

export default PrivateRoutes;