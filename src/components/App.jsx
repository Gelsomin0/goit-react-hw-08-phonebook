import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Login, Navigation, Register, Contacts } from './index';
import { Home } from '../page/index';
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "redux/auth/selectors";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";

export const App = () => {
  const currentToken = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
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
