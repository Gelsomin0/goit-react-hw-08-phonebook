import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { Button, ButtonGroup } from "@mui/material";

const Naviagation = () => {
    return (
        <nav className={css.navBar}>
            <ul className={css.navList}>
                <li className={css.navBlock}>
                    <ButtonGroup variant='text'>
                        <Button>
                            <NavLink to='/'>Main Page</NavLink>
                        </Button> 
                        <Button>
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </Button>
                    </ButtonGroup>
                </li>
                <li className={css.navBlock}>
                    <Button variant='outlined'>
                        <NavLink to='/register'>Register</NavLink>
                    </Button>
                    <Button variant='contained'>
                        <NavLink to='/login' className={css.loginButton}>Login</NavLink>
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Naviagation;