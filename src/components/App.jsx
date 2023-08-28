import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Login, Navigation, Register, Contacts } from './index';
import { Home } from '../page/index';

export const App = () => {
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
