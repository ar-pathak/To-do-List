import { IoMdLock } from "react-icons/io";
import {
  FaFacebookSquare,
  FaGoogle,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault();
    console.log("logged in");
  };

  return (
    <div className=" flex items-center justify-center min-h-screen bg-[#FF6767] bgImg-login md:p-24 sm:p-10 p-5">
      <div className="flex items-center justify-center flex-wrap bg-amber-50 w-full">
        <div className="xl:w-1/2 w-full flex flex-col items-center justify-center my-5">
          <div className="w-full md:px-25 px-10 lg:pt-20 md:pt-15 pt-5">
            <h1 className="text-4xl font-bold my-5">Sign In</h1>
            <form onSubmit={onLogin}>
              <div>
                <label
                  htmlFor="userName"
                  className="flex sm:h-15 h-10 border border-[#565454] rounded-2xl items-center p-3 my-5"
                >
                  <FaUser />
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Enter Username"
                    className="outline-none mx-3 "
                  />
                </label>
                <label
                  htmlFor="userName"
                  className="flex sm:h-15 h-10 border border-[#565454] rounded-2xl items-center p-3"
                >
                  <IoMdLock />
                  <input
                    className="outline-none mx-3"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                  />
                </label>
              </div>
              <div>
                <label className="flex my-5 ">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="sm:w-8 w-4"
                  />
                  <p className="mx-3">Remember Me</p>
                </label>
                <button
                  type="submit"
                  className="sm:py-4 py-2 sm:w-30 w-20 bg-[#FF9090] text-[#F8F9FB] hover:cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:px-25 px-10  md:py-15 py-5">
            <div className="flex flex-wrap items-center">
              <p className="mr-4 my-2">Or,Login with </p>
              <span className="flex">
                <FaFacebookSquare className="sm:w-7 sm:h-7 w-5 h-5 " />
                <FaGoogle className="sm:w-7 sm:h-7 mx-3 w-5 h-5 " />
                <FaTwitterSquare className="sm:w-7 sm:h-7 w-5 h-5 " />
              </span>
            </div>
            <div className="flex flex-wrap items-center my-3">
              <p className="mr-2">Don't have an account?</p>
              <a href="#" className="text-blue-400 font-bold ">
                Create one
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className=" w-full items-center justify-end xl:flex hidden">
            <img src="./img/ach3 1.png" className="mt-10  " alt="logIn-Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
