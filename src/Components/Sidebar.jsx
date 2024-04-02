import React from "react";
import Logout from "/SVG/logout.svg";
import Category from "/SVG/category.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Animations from framer motion
const Sidebar_anime = {
  initial: { opacity: 0, x: -1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      type: "spring",
      bounce: 0.1,
      ease: "easeInOut",
    },
  },
};

function Sidebar() {
  return (
    <div className=" z-30  h-screen fixed left-0 top-0 bg-[#10141f] py-4 pl-4 ">
      <motion.div
        variants={Sidebar_anime}
        initial="initial"
        animate="animate"
        className="flex px-2 bg-[#161d2f] flex-col items-center justify-between py-5  h-full"
      >
        <div className="flex bg-[#161d2f] flex-col items-center gap-4 h-full text-[#57678c] text-2xl">
          <img src="/Images/logo.png" alt="logo" className=" w-8 mb-6" />

          <div className="flex gap-4 items-center flex-col">
            <Link to={"/home"}>
              <img src={Category} alt="" />
            </Link>
            <Link to={"bookmarks"}>
              <i className="uil uil-bookmark"></i>
            </Link>
            <Link to={"/"} className="flex sm:hidden">
              <i className="uil uil-bell  "></i>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img src={Logout} alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Sidebar;
