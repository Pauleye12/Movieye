import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logout from "/SVG/logout.svg";
import SwitchUser from "/SVG/switchUser.svg";
import Settings from "/SVG/setting-2.svg";
import { useNavigate } from "react-router-dom";

function Navbar({ searchMovieFunct }) {
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [selectedAltOption, setSelectedAltOption] = useState("Rec..");
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`search?query=${searchParams}`);
  };

  const handleSelectedOption = (option) => {
    const altOption = option.slice(0, 4);
    const final = altOption.concat("..");
    setSelectedOption(option);
    setSelectedAltOption(final);
    // setShowOptions(false);
    // if (option === "Recommended") {

    // }
  };

  return (
    <div className=" w-full z-20 fixed top-0 right-0 pt-6  bg-[rgb(16,20,31)] py-3 pl-[80px] flex gap-1 lg:gap-3 justify-between items-center px-4">
      <div className="  flex max-w-[40%] w-full lg:w-[46%] items-center border-[#57678c] border rounded-lg px-2 py-1  ">
        <input
          className="bg-transparent rounded-md px-2 w-full  py-1 focus:outline-none text-white  "
          type="text"
          placeholder="Search movie"
          name=""
          id=""
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <button className="w-10 grid place-items-center" onClick={redirect}>
          <i className="uil uil-search text-[#57678c] text-2xl "></i>
        </button>
      </div>
      <ul className=" hidden  min-[800px]:flex min-[950px]:gap-10 gap-7 items-center text-lg justify-between">
        <li className="cursor-pointer hover:border-b-[2px] hover:border-[#57678c] ">
          Home
        </li>
        <li className="cursor-pointer hover:border-b-[2px] hover:border-[#57678c] ">
          Upcoming
        </li>
        <li className="cursor-pointer hover:border-b-[2px] hover:border-[#57678c] ">
          Now Playing
        </li>
      </ul>
      <div
        onClick={() => {
          setShowOptions((prev) => !prev);
        }}
        className="flex relative min-[799px]:hidden gap-2 items-center bg-[#10141f] border-[2px] px-2 py-1 rounded-lg  border-[#57678c]"
      >
        <p className=" hidden min-[530px]:flex ">{selectedOption}</p>
        <p className=" min-[530px]:hidden ">{selectedAltOption}</p>
        <i className="uil uil-angle-down text-xl "></i>
        {showOptions && (
          <div className="absolute bottom-[-110px] bg-[#10141f] left-0 px-2 py-1 min-w-max w-full flex flex-col gap-2 rounded-lg pb-2 ">
            <p onClick={() => handleSelectedOption("Recommended")}>
              Recommended
            </p>
            <p onClick={() => handleSelectedOption("Upcoming")}>Upcoming</p>
            <p onClick={() => handleSelectedOption("Now Trending")}>
              Now Trending
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-6 ml-[10px] items-center text-[#57678c] text-4xl">
        <div className="hidden sm:flex">
          <i className="uil uil-bell  "></i>
        </div>
        <div
          className="relative"
          onMouseOver={() => {
            setShowDropdown(true);
          }}
          onMouseOut={() => {
            setShowDropdown(false);
          }}
        >
          <img
            className="rounded-full w-10 object-cover object-center aspect-square "
            src="/Images/Test1.jpg"
            alt=""
          />
          {showDropdown && (
            <div className="absolute bottom-[-150px]  left-[10%] translate-x-[-50%] w-max pt-7">
              <ul className=" border px-4 py-2 rounded-lg text-left w-full flex flex-col text-white gap-2 bg-[#161d2f] text-base ">
                <li className="cursor-pointer flex items-center gap-2">
                  <img src="/Images/Test1.jpg" alt="" className="w-5 " />{" "}
                  <span>View Profile</span>
                </li>
                <li className="cursor-pointer flex items-center gap-2">
                  <img src={Settings} alt="" className="w-5 " />{" "}
                  <span>Settings</span>
                </li>
                <li className="cursor-pointer flex items-center gap-2">
                  <img src={SwitchUser} alt="logo" className="w-5 " />{" "}
                  <span>Switch User</span>
                </li>
                <li className="cursor-pointer text-[red] flex items-center gap-2">
                  {" "}
                  <img src={Logout} alt="logo" className=" w-5 " />
                  <span>Sign Out</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;