import React from "react";

import { Outlet } from "react-router-dom";
// 9a999b text color
function Entry() {
  const backdropStyle = {
    backgroundImage: ` url("./Images/illustration.png") `,
    backgroundSize: "auto",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="h-full min-h-screen  w-full grid place-items-center">
      <div className=" text-[#fff] font-medium w-full min-[800px]:grid flex flex-col gap-4  min-[800px]:grid-cols-5 bg-[#10141f]">
        <div className=" bg-[#10141f] col-span-2  p-5 overflow-y-auto ">
          <Outlet />
          {/* <Login />
        <Signup /> */}
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-14">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <div>or connect with</div>
            <button className="bg-white grid place-items-center rounded-full w-full py-2 px-2 ">
              <img className="w-10" src="./Images/google.png" alt="" />
            </button>
          </div>
        </div>
        <div
          style={backdropStyle}
          className=" bg-[#10141f] col-span-2 hidden min-[800px]:flex "
        ></div>
      </div>
    </div>
  );
}

export default Entry;
