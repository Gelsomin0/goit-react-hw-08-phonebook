import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "redux/auth/selectors";
import { logOut } from "redux/auth/operations";

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOut());
    }

    return(
        <nav className={css.nav_bar}>
            <ul className={css.nav_list}>
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
                {isLoggedIn && 
                    <>
                        <li>
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </li>
                        <li  className={css.register_link}>
                            <span>Hello, {userName}</span>
                            <button onClick={onLogOut}>Logout</button>
                        </li>
                    </>
                }  
                {!isLoggedIn && 
                    <>
                        <li className={css.register_link}>
                            <NavLink to='/register'>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
}