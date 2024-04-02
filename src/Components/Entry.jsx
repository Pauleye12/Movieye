// import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
// 9a999b text color

//Animations from framer motion

const RightBackdrop = {
  initial: { opacity: 0, x: 1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.7, type: "spring" },
  },
};

const GoogleConnect = {
  initial: { opacity: 0, y: -1000 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.8, type: "spring" },
  },
};
const Btn_anime = {
  initial: { opacity: 1, x: 0, y: 0, scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.7, ease: "easeIn", type: "spring" },
  },
  onClick: {
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeIn", type: "spring" },
  },
};

function Entry() {
  const backdropStyle = {
    backgroundImage: ` url("./Images/illustration.png") `,
    backgroundSize: "auto",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };
  return (
    <motion.div className="h-full min-h-screen  w-full grid place-items-center">
      <div className=" text-[#fff] font-medium w-full min-[800px]:grid flex flex-col gap-4  min-[800px]:grid-cols-5 bg-[#10141f]">
        <motion.div className=" bg-[#10141f] col-span-2  p-5 overflow-y-auto ">
          <Outlet />
        </motion.div>
        <div className="flex flex-col items-center justify-center h-full gap-14">
          <motion.div
            variants={GoogleConnect}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center items-center gap-2 "
          >
            <div>or connect with</div>

            <motion.button
              variants={Btn_anime}
              initial="initial"
              whileHover="hover"
              whileTap="onClick"
              // exit="exit"
              className="bg-white grid place-items-center rounded-full w-full py-2 px-2 "
            >
              <img className="w-10" src="./Images/google.png" alt="" />
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          variants={RightBackdrop}
          initial="initial"
          animate="animate"
          style={backdropStyle}
          className=" bg-[#10141f] col-span-2 hidden min-[800px]:flex "
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Entry;
