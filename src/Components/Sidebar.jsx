import React from "react";
import Logout from "/SVG/logout.svg";
import Category from "/SVG/category.svg";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className=" z-30  h-screen fixed left-0 top-0 bg-[#10141f] py-4 pl-4 ">
      <div className="flex px-2 bg-[#161d2f] flex-col items-center justify-between py-5  h-full">
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
      </div>
    </div>
  );
}

export default Sidebar;
