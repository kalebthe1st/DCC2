import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Businesses from "../pages/Businesses/Businesses";
import BusinessesDetails from "../pages/Businesses/BusinessesDetails";

import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/businesses" element={<Businesses />} />
      <Route path="/businesses:id" element={<BusinessesDetails />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
export default Routers;
