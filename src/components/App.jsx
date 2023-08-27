import { Route, Routes } from "react-router-dom";
import { Navigation, Register } from "./index";
import { Home, Contacts } from '../page/index';

export const App = () => {
  return (
    <div>
      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/contacts' element={<Contacts />} />  
        <Route path='/register' element={<Register />} />  
      </Routes>
    </div>
  );
};
