import React from "react";
import { Outlet } from "react-router-dom";

function Default() {
  return (
    <div className="bg-[#10141f] w-full  ">
      <Outlet />
    </div>
  );
}

export default Default;
