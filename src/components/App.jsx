import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import {
  Navigation,
  PrivateRoute,
  PublicRoute,
} from './index';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { getIsFetchingCurrentUser, getToken } from "redux/auth/selectors";
import { getAllContacts } from "redux/contacts/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  // const isTokenHere = useSelector(getToken);
  
  useEffect(() => {
    dispatch(refreshUser());
    
    // if (isTokenHere !== null) {
    //   dispatch(getAllContacts());
    // }
  }, [dispatch]);

  return (!isFetchingCurrentUser && (
    <div>
      <Container>
        <Navigation />
        <Routes>
          <Route path='/' index element={<PublicRoute route='/' />} />
          <Route path='/contacts' element={<PrivateRoute route='contacts' />} />
          <Route path='/favorite_contacts' element={<PrivateRoute route='favorite_contacts' />} />
          <Route path='/login' element={<PublicRoute route='login' restricted />} />
          <Route path='/register' element={<PublicRoute route='register' restricted />} />
        </Routes>
      </Container>
    </div>
  ));
};
