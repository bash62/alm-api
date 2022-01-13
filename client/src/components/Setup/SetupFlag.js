import Axios from "axios";
import React, { useEffect, useState } from "react";

import UK from '../../assets/flags/uk.png'
import FR from '../../assets/flags/france.png'
import ES from '../../assets/flags/spain.png'

import SetupLoading from "./SetupLoading";
import SetupBackground from './SetupBackground';

export const SetupFlag = ({ ...props }) => {
  const [w, setLang] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setprofile] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState("");
  const [selected, setSelected] = useState(false);
  const [apiRespond, setApiRespond] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (props.lang !== undefined && Object.entries(props.lang).length > 0) {
      setLoading(false);
      setLang(props.lang);
      
    }
  }, [props]);

  const onClickHandle = () => {
    
    setApiRespond(true);

    Axios.post(
      "http://localhost:3001/api/user/update/setup/2",
      { lang: flag },
      { withCredentials: true }
    )
      .then((res) => {

        props.reload(true);

      })
      .catch((err) => {

        setApiRespond(false);

        setMessage(err.response.data.message);
      });
  };

  const onFlagClick = (e) => {
        if(flag === e.id){
            setFlag("");
            setSelected(false);

        }
        else{
            setFlag(e.id);
            setSelected(true);
        }
  }

  if (loading || apiRespond) {
    return <SetupLoading />;
  }
  return (
    <div className="w-screen bg-gray-500 h-full fixed items-center flex justify-center content-center ">

    <SetupBackground/>
      <div className=" w-full h-auto h-auto md:w-2/3 bg-gray-200 rounded-xl mx-6">
        <div className="">
          <div className="flex justify-center">
            <img
              className=" mt-9 rounded-full opacity-90 md:h-48 "
              src={
                "https://cdn.discordapp.com/avatars/" +
                props.user.discordId +
                "/" +
                props.user.discord.avatar
              }
            />
          </div>
        </div>
        <div className="flex text-center justify-center">
          <h1 className=" z-10 inline-block px-6 md:py-6 text-3xl md:text-5xl  ld:text-5xl md:mt-6 font-bold ">
            {w.SETUP_TITLE}
          </h1>
        </div>

        <div className=" grid md:flex text-center items-center justify-center mb-8">

            <img  className={`h-32 xl:h-1/5 max-h-64 mx-8 drop-shadow-2xl cursor-pointer  ${flag == "UK" ? 'opacity-80 scale-95' : 'hover:scale-105' }`} onClick={ (e)=> onFlagClick(e.target)} id="UK" src={UK}></img>
            <img  className={`h-32 xl:h-1/5 max-h-64 mx-8 drop-shadow-2xl cursor-pointer  ${flag == "FR" ? 'opacity-80 scale-95' : 'hover:scale-105' } `} onClick={(e)=> onFlagClick(e.target)} id="FR" src={FR}></img>
            <img  className={`h-32 xl:h-1/5 max-h-64 mx-8 drop-shadow-2xl cursor-pointer  ${flag == "ES" ? 'opacity-80 scale-95' : 'hover:scale-105' } `} onClick={(e)=> onFlagClick(e.target)} id="ES" src={ES}></img>
        </div>
        <div className="flex  text-center justify-center">
                    <div className={`px-12 mb-12 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse hover:scale-105 ${selected? '' : 'hidden' }`}>
                        <button onClick={() => onClickHandle()} className=" text-2xl h-14">{w.SETUP_BUTTON}</button> 
            </div>
         </div>

      </div>
    </div>
  );
};
