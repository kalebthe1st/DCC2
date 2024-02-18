import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";
import { authContext } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(authContext);

  const handeleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
  // localStorage.setItem("token",result.token)
  console.log(result)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result,"login data")

      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor leading-9 font-bold mb-10 text-[22px]">
          Hello <span className="text-primaryColor">Welcome</span> Back!🎉
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
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
            <button className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3">
              { loading ? <HashLoader size={25} color="#fff" /> : 'Login'}
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
