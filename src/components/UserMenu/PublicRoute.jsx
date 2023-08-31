import { Login, Register } from "components";
import { Home } from "page";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/selectors";

export const PublicRoute = ({ route, restricted = false }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    
    return (
        <>
            {route === 'login' && <Login restricted={shouldRedirect} /> }
            {route === 'register' && <Register restricted={shouldRedirect} />}
            {route === '/' && <Home />}
        </>
    )
}