import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Bussiness from "../pages/Bussiness/Bussiness";
import BussinessDetails from "../pages/Bussiness/BussinessDetails";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bussiness" element={<Bussiness />} />
      <Route path="/bussiness:id" element={<BussinessDetails />} />
      <Route path="/news" element={<News />} />
      <Route path="services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  
};
export default Routers;
