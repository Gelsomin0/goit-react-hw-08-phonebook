import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors";
import css from './UserMenu.module.css';
import { logoutUser } from "redux/auth/auth-operations";

const UserMenu = () => {
    const userName = useSelector(getUserName);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logoutUser());
    }

    return (
        <li className={css.userPanel}>
            <p>Welcome {userName}</p>
            <Button onClick={onLogOut} variant='text'>Logout</Button>
        </li>
    );
}

export default UserMenu;