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
  initial: { opacity: 0, x: -1000 },
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

function Signup() {
  const navigate = useNavigate();
  //Object containing sign up details
  const [signupDets, setSignupDets] = useState({
    firstName: "",
    lastName: "",
    email: "",
    genre: "",
    password: "",
    confirmpassword: "",
  });

  //Fuction to update the signup details
  const updateInfo = (val, e) => {
    return setSignupDets((prev) => ({ ...prev, [val]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupDets);
    navigate("/home");
  };
  return (
    <motion.div
      variants={loginForm}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center h-full gap-14"
    >
      <div className="flex flex-col gap-1 items-center">
        <div className="px-[14px] py-3  border-2 rounded-full border-white flex justify-center items-center bg-white text-[#10141f] text-5xl ">
          <i className="uil uil-user"></i>
        </div>
        <p className="text-[#fff] text-4xl ">Register</p>
      </div>

      <div className="max-w-[300px] w-full">
        <form
          className="flex flex-col gap-2 justify-center text-sm w-full "
          action=""
        >
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border focus:border-[2px] focus:bg-[#161d2f50] rounded-md px-2 py-[4px]"
              type="text"
              name="firstName"
              id="firstName"
              onChange={(e) => updateInfo("firstName", e)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border focus:border-[2px] focus:bg-[#161d2f50] rounded-md px-2 py-[4px]"
              type="text"
              name="lastName"
              id="lastName"
              onChange={(e) => updateInfo("lastName", e)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">Email Address</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border focus:border-[2px] focus:bg-[#161d2f50] rounded-md px-2 py-[4px]"
              type="email"
              name="email"
              id="email"
              onChange={(e) => updateInfo("email", e)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="genre">What genre do you Enjoy?</label>
            <select
              required
              className="bg-[#161d2f] outline-none border-[#57678c] border focus:border-[2px] focus:bg-[#161d2f50] rounded-md px-2 py-[4px]"
              name="genre"
              id="genre"
              onChange={(e) => updateInfo("genre", e)}
            >
              <option selected value="">
                {" "}
                Select Genre
              </option>
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Family">Family</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full mt-3">
            <label htmlFor="password">Password</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border rounded-md px-2 focus:border-[2px] focus:bg-[#161d2f50] py-[4px]"
              type="password"
              name="password"
              id="password"
              onChange={(e) => updateInfo("password", e)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full mt-3">
            <label htmlFor="ConfirmPassword"> Confirm Password</label>
            <input
              required
              className=" bg-[#161d2f] text-base outline-none border-[#57678c] border rounded-md px-2 focus:border-[2px] focus:bg-[#161d2f50] py-[4px]"
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              onChange={(e) => updateInfo("confirmpassword", e)}
            />
          </div>

          <motion.button
            variants={Btn_anime}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="onClick"
            onClick={handleSubmit}
            className="bg-white mt-5 py-3 px-2 text-[#161d2f] rounded-full "
          >
            Register
          </motion.button>
        </form>
        <div>
          Already have an account? <Link to={"/"}>Login</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
