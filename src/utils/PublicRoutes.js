const { useSelector } = require("react-redux");
const { Outlet, Navigate } = require("react-router-dom");
const { getIsLoggedIn } = require("redux/auth/authSelectors")

const PublicRoutes = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        !isLoggedIn ? <Outlet /> : <Navigate to='/' />
    );
}

export default PublicRoutes;