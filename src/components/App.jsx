import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Login, Navigation, Register, Contacts } from './index';
import { Home } from '../page/index';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { getToken } from "redux/auth/selectors";
import { getAllContacts } from "redux/contacts/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isTokenHere = useSelector(getToken);
  console.log(isTokenHere);

  useEffect(() => {
    dispatch(refreshUser());

    if (isTokenHere !== null) {
      dispatch(getAllContacts);
    }
  }, [dispatch]);

  return (
    <div> 
      <Container>
        <Navigation/>
        <Routes>
          <Route path='/' index element={ <Home /> } />
          <Route path='/contacts' element={ <Contacts /> } />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </Container>
    </div>
  );
};
