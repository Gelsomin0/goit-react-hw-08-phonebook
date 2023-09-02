import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';

const Naviagation = () => {
    return (
        <nav className={css.navBar}>
            <ul className={css.navList}>
                <li className={css.navBlock}>
                    <NavLink to='/'>Main Page</NavLink>
                    <NavLink to='/contacts'>Conatacts</NavLink>
                </li>
                <li className={css.navBlock}>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Naviagation;