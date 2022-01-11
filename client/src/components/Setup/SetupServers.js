import Axios from "axios";
import React, { useEffect, useState } from "react";


import JAHASH from '../../assets/servers/jahash.jpg'
import ILLY from '../../assets/servers/illy.jpg'


import SetupLoading from "./SetupLoading";
import SetupBackground from './SetupBackground';

const SetupServers = ({ ...props }) => {

  let servers = [
    {name: "JAHASH", selected:false},
    {name: "ILLY", selected:false}

  ]

  const [w, setLang] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState("");
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(servers);
 
  
  useEffect(() => {
    setLoading(true);
    if (props.lang !== undefined && Object.entries(props.lang).length > 0) {
      setLoading(false);
      setLang(props.lang);
    }

  }, [props,  selected]);

  const isServerSelected = () =>{
    if(active){
      return;
    }
    selected.forEach(e => {
      if(e.selected){
        setActive(true);
        return;
      }
    });
    setActive(false);
  }

  const onClickHandle = () => {
    Axios.post(
      "http://localhost:3001/api/user/update/setup/3",
      { servers: selected },
      { withCredentials: true }
    )
      .then((res) => {

        props.reload(true);

        console.log(props);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const onFlagClick = (e) => {
        
        const selectedTemp = selected;
        selectedTemp.map(x => {
          if(x.name === e.id){
            x.selected = !x.selected;
          }
          else{
            x.selected = false;
          }
        })
        setSelected(selectedTemp);
        

        if(flag === e.id){
            setFlag("");
            setActive(false)
        }
        else{
            setFlag(e.id);
            setActive(true);
        }
        console.log(selected)
  }

  if (loading) {
    return <SetupLoading />;
  }
  return (
    <div className="w-screen bg-gray-500 h-full fixed items-center flex justify-center content-center ">

    <SetupBackground/>
      <div className=" w-full h-auto md:w-2/3 bg-gray-200 rounded-xl mx-6 ">
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

        <div className="relative grid md:flex-cols-1 grid-flow-col flex text-center items-center justify-center mb-8">
            <div>
                <div className={`text-black font-bold text-2xl ${selected[0].selected} ? 'opacity-0' : ''}  `}>Jahash</div>
                <img className={`h-28 md:h-32 rounded-lg xl:h-1/5 max-h-48 md:mx-4 drop-shadow-2xl cursor-pointer  ${flag === "JAHASH" ? 'opacity-80 scale-95' : 'hover:scale-105' }`} onClick={ (e)=> onFlagClick(e.target)} id="JAHASH" src={JAHASH} alt="Jahash"></img>
            </div>

            <div >
                <div className="text-black text-2xl font-bold  " >Illyzael</div>
                <img  className={`h-28 md:h-32 rounded-lg xl:h-1/5 max-h-48 md:mx-4 drop-shadow-2xl cursor-pointer  ${flag === "ILLY" ? 'opacity-80 scale-95' : 'hover:scale-105' } `} onClick={(e)=> onFlagClick(e.target)} id="ILLY" src={ILLY} alt="Illyzael"></img>
            </div>

        </div>
        <div className="flex  text-center justify-center">
                    <div className={`px-12 md:mb-6 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse hover:scale-105 ${active? '' : 'hidden' }`}>
                        <button onClick={() => onClickHandle()} className=" text-2xl h-14">{w.SETUP_BUTTON}</button> 
            </div>
         </div>

      </div>
    </div>
  );
};


export default SetupServers;