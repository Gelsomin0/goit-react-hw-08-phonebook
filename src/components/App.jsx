import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import PrivateRoutes from "utils/PrivateRoutes";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import Register from "./Register/Register";
import PublicRoutes from "utils/PublicRoutes";

export const App = () => {
  return  (
    <div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/' element={<HomePage />} exact />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};
