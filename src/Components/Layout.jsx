import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="bg-[#10141f] text-white pt-[90px] min-h-screen pl-[80px]  w-full  ">
      <Navbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}

export default Layout;
