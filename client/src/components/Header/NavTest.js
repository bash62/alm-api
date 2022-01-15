import React, { useState } from "react";
import { Link,Route } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Menu from "../../assets/icons_svg/menu.svg";
import Magnifier from "../../assets/icons_svg/magnifier.svg";
import { FaDiscord, FaGlasses } from "react-icons/fa";



const AppHeader = ({ ...props }) => {
  
  const [clicked, setClicked] = useState(false);

  const HandleClick = () => {
    <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
  };

  if (props.lang === undefined) {
    return <div className=" w-full bg-gray-300 h-14"></div>;
  }

  return (
    <div className="  w-full top-0 left-0 h-16 bg-discord-background ">

      <div className="pt-2 ">
        <RightNav />
        <LeftNav/>
        <LogoPassage/>

      </div>
      
    </div>
  );
};

const LogoPassage = () => (
  <div className=" w-full flex items-center justify-center group">
    <img className="logo-nav " src={Logo}/>
  </div>
)

const LeftNav = () => (
  <div className="w-0 md:w-full h-auto relative  justify-center ">
    <div className="absolute h-12 left-0 top-0 flex  items-center mx-4  ">
      <div className=" my-1 md:mr-8">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaGlasses size="22"/>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="ffefe"
              type="text"
              name="search"
            />
          </label>
        </div>
    </div>
  </div>
)

const RightNav = () => (
  <div className="w-full h-auto relative">
    <div className="absolute right-0 top-0 flex items-center mx-4">
      <Link className="mx-2 text-white" to="/">Mes services</Link>
      <Link className="mx-2 text-white" to="/">Favoris</Link>
      <Link className="mx-2 text-white" to="/">Commandes</Link>

      <a href="http://localhost:3001/api/auth/discord/redirect"><DiscordButton  name="Connecte toi avec discord"/></a>

    </div>

  </div>

)



const DiscordButton = ({name}) => (

  <div className="flex">
        
    <button  className="discord-button flex items-center " >{name}<FaDiscord className="md:mx-2  " size="24"/> </button>

  </div>
)

export default AppHeader;
