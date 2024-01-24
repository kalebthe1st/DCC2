import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handeleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor leading-9 font-bold mb-10 text-[22px]">
          Hello <span className="text-primaryColor">Welcome</span> Back!🎉
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handeleInputChange}
            />
          </div>
          <div className="mb-5">
            <input
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handeleInputChange}
            />
          </div>

          <div className="mt-7">
            <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3">
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primaryColor font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default Login;
