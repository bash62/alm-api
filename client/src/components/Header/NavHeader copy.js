import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Menu from "../../assets/icons_svg/menu.svg";
import Magnifier from "../../assets/icons_svg/magnifier.svg";

const NavHeader = ({ ...props }) => {
  
  const [clicked, setClicked] = useState(false);

  const HandleClick = () => {
    setClicked(!clicked);
  };

  if (props.lang === undefined) {
    return <div className=" w-full bg-gray-300 h-14"></div>;
  }

  return (
    <div
      className={` w-full  border border-gray-400 bg-gray-300 ${
        clicked ? "h-auto" : "h-20"
      }  `}
    >
      <div className="grid grid-cols-4  ">
        <div className=" flex col-span-2 ">
          <button
            onClick={() => {
              HandleClick();
            }}
            className="w-12 ml-8 "
          >
            <img className="" src={Menu} />
          </button>
        </div>

        <div className="  col-span-2  ">
          <img className="w-28 mx-24 my-2  " src={Logo} />
        </div>
        <div className={` ${!clicked && "hidden"} col-span-4 text-center`}>
          <div className="w-full hover:bg-gray-200">{props.lang.EXPLORE}</div>
          <div className="w-full hover:bg-gray-200">{props.lang.FAVORITE}</div>
          <div className="w-full hover:bg-gray-200">{props.lang.ORDERS}</div>
        </div>

        <div className="flex  justify-center items-center col-span-4">
          <label class="relative block">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img className="h-5 w-5" src={Magnifier} />
            </span>
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder={props.lang.PLACEHOLDER}
              type="text"
              name="search"
            />
          </label>
        </div>

        
      </div>
    </div>
  );
};

export default NavHeader;
