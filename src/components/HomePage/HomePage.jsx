import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "redux/auth/authSelectors";
import css from './HomePage.module.css';
import { logoutUser } from "redux/auth/authOperations";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import { Button, Typography } from "@mui/material";

const HomePage = () => {
    const userData = useSelector(getUserData);
    const dispatch = useDispatch();

    const logoutCurrentUser = () => {
        dispatch(logoutUser());
    }

    return (
        <>
            <div className={css.appBar}>
                <div className={css.userBlock}>Wellcome,
                    <span className={css.userName}> {userData.name} </span>
                    ( <i>{userData.email}</i> )
                </div>
                <Button
                    sx={{
                        color: '#cecece',
                        borderColor: '#cecece',
                        '&:hover': {
                            color: '#fff',
                            borderColor: '#fff'
                        }
                    }}
                    variant="outlined"
                    onClick={logoutCurrentUser}
                >Logout</Button>
            </div>
            <main className={css.mainContent}>
                <ContactForm />
                <ContactList />
            </main>
        </>
    );
}

export default HomePage;