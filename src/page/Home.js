import { Outlet } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <p>Home page</p>
            <Outlet/>
        </>
    );
}