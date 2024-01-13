import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    gender: "",
    photo: "",
  });

  const handeleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    // later we will upload img using cloudinary

    console.log(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}

          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Signup form */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor leading-9 font-bold mb-10 text-[22px]">
              Create Account <span className="text-primaryColor">Accont</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handeleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handeleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handeleInputChange}
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handeleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 
                  py-3 focus:outline-none"
                  >
                    <option value="">select</option>
                    <option value="client">Client</option>
                    <option value="business">Business</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    value={formData.gender}
                    onChange={handeleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 
                  py-3 focus:outline-none"
                  >
                    <option value="">select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure
                  className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justfy-center"
                >
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileInputChange}
                    id="customFile"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
                  text-[15px] leading-6 overflow-hidden bg-[#006ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    upload photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg  py-3">
                  Login
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;