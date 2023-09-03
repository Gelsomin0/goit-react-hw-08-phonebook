import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "redux/auth/authSelectors";
import css from './HomePage.module.css';
import { logoutUser } from "redux/auth/authOperations";

const HomePage = () => {
    const userData = useSelector(getUserData);
    const dispatch = useDispatch();

    const logoutCurrentUser = () => {
        dispatch(logoutUser());
    }

    return (
        <div className={css.appBar}>
            <div className={css.userBlock}>Wellcome,
                <span className={css.userName}> {userData.name} </span>
                ({userData.email})
            </div>
            <button className={css.logoutButton} onClick={logoutCurrentUser}>Logout</button>
        </div>
    );
}

export default HomePage;