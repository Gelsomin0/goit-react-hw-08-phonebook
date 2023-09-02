import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { Button, ButtonGroup } from "@mui/material";
import { ExitToApp, HowToReg } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "redux/auth/auth-selectors";
import UserMenu from "components/UserMenu/UserMenu";

const Naviagation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <nav className={css.navBar}>
            <ul className={css.navList}>
                <li className={css.navBlock}>
                    <ButtonGroup variant='text'>
                        <Button>
                            <NavLink to='/'>Main Page</NavLink>
                        </Button> 
                        {isLoggedIn && (
                            <Button>
                                <NavLink to='/contacts'>Contacts</NavLink>
                            </Button>    
                        )}
                    </ButtonGroup>
                </li>
                {!isLoggedIn && (
                    <li className={css.navBlock}>
                        <Button variant='outlined' endIcon={<HowToReg />}>
                            <NavLink to='/register'>Register</NavLink>
                        </Button>
                        <Button variant='contained' endIcon={<ExitToApp />}>
                            <NavLink
                                to='/login'
                                className={css.loginButton}
                            >Login</NavLink>
                        </Button>
                    </li>
                )}
                {isLoggedIn && (
                    <UserMenu />
                )}
            </ul>
        </nav>
    );
}

export default Naviagation;