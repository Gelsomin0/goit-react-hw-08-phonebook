import Naviagation from "components/Naviagation/Naviagation";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>
                <Naviagation />
            </div>
            <Outlet />
        </>
    );
}

export default Layout;