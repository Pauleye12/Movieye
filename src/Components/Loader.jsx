import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading_anime = {
  first: {
    x: [0, 30, 0],
    transition: {
      x: { repeat: Infinity, duration: 0.75 },
    },
  },
  second: {
    x: [0, -30, 0],
    transition: {
      x: { repeat: Infinity, duration: 0.75 },
    },
  },
};

function Loader() {
  return (
    <motion.div className="w-full h-full flex-col items-center justify-center">
      <div className="flex w-full h-full items-center justify-center gap-3 ">
        <motion.div
          variants={Loading_anime}
          animate="first"
          className="h-3 w-3 rounded-full bg-white "
        ></motion.div>
        <motion.div
          variants={Loading_anime}
          animate="second"
          className="h-3 w-3 rounded-full bg-[#57678c] "
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Loader;
