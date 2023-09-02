import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("./Layout/Layout"));
const MainPage = lazy(() => import('./MainPage/MainPage'));
const Register = lazy(() => import("./Register/Register"));
const Login = lazy(() => import("./Login/Login"));
const ContactsList = lazy(() => import("./ContactsList/ContactsList"));

export const App = () => {
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
