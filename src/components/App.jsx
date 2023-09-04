import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import PrivateRoutes from "utils/PrivateRoutes";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import Register from "./Register/Register";
import PublicRoutes from "utils/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "redux/auth/authOperations";
import { getFetchingUser } from "redux/auth/authSelectors";

export const App = () => {
  const dispatch = useDispatch();
  const isFetchinCurrentUser = useSelector(getFetchingUser);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return  (
    <div>
      {!isFetchinCurrentUser && (
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
              <Route path='*' element={<PrivateRoutes />} />
            </Routes>
          </Suspense>
        </Container>
      )}
    </div>
  );
};
