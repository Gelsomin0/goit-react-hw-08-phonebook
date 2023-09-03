import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Layout from "./Layout/Layout"; 
import MainPage from './MainPage/MainPage';
import Register from './Register/Register';
import Login from './Login/Login';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch, useSelector } from "react-redux";
import { refreshCurrentUser } from "redux/auth/auth-operations";
import { getPersistedToken } from "redux/auth/auth-selectors";
import { getAllContacts } from "redux/contacts/contacts-operations";

// const Layout = lazy(() => import("./Layout/Layout"));
// const MainPage = lazy(() => import('./MainPage/MainPage'));
// const Register = lazy(() => import("./Register/Register"));
// const Login = lazy(() => import("./Login/Login"));
// const ContactsList = lazy(() => import("./ContactsList/ContactsList"));

export const App = () => {
  const dispatch = useDispatch();
  const persistedToken = useSelector(getPersistedToken);

  useEffect(() => {
    dispatch(refreshCurrentUser(persistedToken));
    dispatch(getAllContacts());
  }, [dispatch, persistedToken]);

  return  (
    <div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<MainPage />} />
              <Route path='contacts' element={<ContactsList />} />
              <Route path='register' element={<Register />} /> 
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};
