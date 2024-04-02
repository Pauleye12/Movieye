import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//Animations from framer motion
const loginForm = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.7, type: "spring" },
  },
};

const Btn_anime = {
  initial: { opacity: 0, x: -1000, y: 0, scale: 1 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 1.6, type: "spring" },
  },
  hover: {
    y: 5,
    transition: { duration: 0.7, ease: "easeIn", type: "spring" },
  },
  onClick: {
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeIn", type: "spring" },
  },
};

function Login() {
  const navigate = useNavigate();

  const [loginDets, setLoginDets] = useState({
    email: "",
    password: "",
  });

  //Fuction to update the login details
  const updateInfo = (val, e) => {
    return setLoginDets((prev) => ({ ...prev, [val]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginDets);
    navigate("/home");
  };
  return (
    <motion.div
      variants={loginForm}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center h-full gap-14"
    >
      <div className="flex flex-col gap-1 items-center">
        <div className="px-[14px] py-3  border-2 rounded-full border-white flex justify-center items-center bg-white text-[#10141f] text-5xl ">
          <i className="uil uil-user"></i>
        </div>
        <p className="text-[#fff] text-4xl ">Log In</p>
      </div>

      <div className="max-w-[300px] w-full">
        <form
          className="flex flex-col gap-2 justify-center text-sm w-full "
          action=""
        >
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Email Address</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border focus:border-[2px] focus:bg-[#161d2f50] rounded-md px-2 py-[4px] md:py-[6px]"
              type="email"
              name="email"
              id="email"
              onChange={(e) => updateInfo("email", e)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full mt-3">
            <label htmlFor="password">Password</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border rounded-md px-2 focus:border-[2px] focus:bg-[#161d2f50] py-[4px] md:py-[6px]"
              type="password"
              name="password"
              id="password"
              onChange={(e) => updateInfo("password", e)}
            />
          </div>
          <div className="flex justify-between text-[#9a999b]">
            <div className="cursor-pointer">
              {" "}
              <input
                className="text-base outline-none border-[#10141f] border cursor-pointer rounded-md px-2 py-[2px]"
                type="checkbox"
                name="remember"
                id="remember"
              />{" "}
              <label className="cursor-pointer" htmlFor="remember">
                Remember me
              </label>{" "}
            </div>
            <div className="cursor-pointer">Forgot password</div>
          </div>
          <motion.button
            variants={Btn_anime}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="onClick"
            onClick={handleSubmit}
            className="bg-white  mt-5 py-3 px-2 text-[#161d2f] rounded-full "
          >
            Log in
          </motion.button>
        </form>
      </div>

      <div>
        Don't have an account? <Link to={"signup"}>Sign up</Link>
      </div>
    </motion.div>
  );
}

export default Login;
