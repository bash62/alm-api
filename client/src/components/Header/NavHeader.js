import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Menu from "../../assets/icons_svg/menu.svg";
import Magnifier from "../../assets/icons_svg/magnifier.svg";

const NavHeader = ({ ...props }) => {
  const [clicked, setClicked] = useState(false);
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loggedIn,setLoggedIn] = useState(null)


  const HandleClick = () => {
    setClicked(!clicked);
  };
  
  useEffect(() => {
      setLoading(true);
      if(props.user !== undefined && props.lang !== undefined){
          setUser(props.user)
          setLoading(false);
      }


  }, [props])

  if (loading || user === null ) {
    return <div className=" w-full bg-gray-300 h-14"></div>;
  }


  return (
    <header className=" top-0  bg-gray-300 border ">
            
    <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5 ">
    <div onClick={HandleClick} className={`
        md:hidden uppercase
    `}> 
        <img className="h-12" src={Menu}/>
    </div>
    <div className="flex md:w-80  w-32  md:absolute left-1/2 right-1/2 ">
        <img src={Logo} className=""/>
    </div>

    <nav className={`
        ${!clicked && 'hidden'} 
        static flex flex-col top-full w-full left-0 z-20
        md:static md:w-auto md:flex-row md:flex
    `}>
        <ul className="md:flex-row md:flex ">
            <li className="list-none md:mr-5">
                <Link to="/" className="flex w-full text-base md:text-xl uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">{props.lang.FAVORITE}</Link>
            </li>
            <li className="list-none md:mr-5">
                <Link to="/" className="flex w-full text-base md:text-xl uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">{props.lang.EXPLORE}</Link>
            </li>
            <li className="list-none md:mr-5">
                <Link to="/" className="flex w-full text-base md:text-xl uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">{props.lang.ORDERS}</Link>
            </li>
        </ul>


    </nav>
    <div className="flex ">
    <div className="flex hidden justify-center items-center md:mr-8">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img className="h-5 w-5" src={Magnifier} />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder={props.lang.PLACEHOLDER}
              type="text"
              name="search"
            />
          </label>
        </div>
        <img className=" rounded-full opacity-90 h-14  md:h-16  " src={"https://cdn.discordapp.com/avatars/"+user.discordId+"/"+user.discord.avatar}/>

    </div>

    </div>
</header>
  );
};

export default NavHeader;
