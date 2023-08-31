import { Contacts } from "components";
import { FavoriteContacts } from "components/FavoriteContacts/FavoriteContacts";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/selectors";


export const PrivateRoute = ({route}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const showContacts = () => {
        if (route === 'contacts') {
            return (<Contacts />)
        }
        if (route === 'favorite_contacts') {
            return (<FavoriteContacts />)
        }
    }
    
    return (
        <>
            {isLoggedIn ? showContacts() : <Navigate to='/' /> }
        </>
    );
}