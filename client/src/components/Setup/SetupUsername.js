import Axios from "axios";
import React, { useEffect,useState } from "react";

import SetupLoading from "./SetupLoading";
import SetupBackground from './SetupBackground';


export const SetupUsername = ({ ...props }) => {
    const [w,setLang] = useState(null);
    const [loading,setLoading] = useState(true);
    const [username,setUsername] = useState("")
    const [validate, setValidate] = useState(false);
    const [message, setMessage] = useState("");
    const [apiRespond, setApiRespond] = useState(false);

    useEffect(() => {
        setLoading(true);
        if(props.lang !== undefined && Object.entries(props.lang).length > 0 ){
            setLoading(false);
            setLang(props.lang);
        }
        if(validate){
            
            
            
            setValidate(false);
        }
      }, [props, validate]);
    
      
     
      const onClickHandle =  () => {
        setApiRespond(true);

        Axios.post('http://localhost:3001/api/user/update/setup/0',{username: username}, { withCredentials: true })
        .then( (res) => {
            setValidate(true);
            props.reload(true);
            
        })
        .catch((err)=>{
            setApiRespond(false);

            setMessage(err.response.data.message)
            
        })

      };
    if (loading || apiRespond) {
        return <SetupLoading />;;
    }
    if(validate){
        
        
        
    }
  

    return (

        <div className="w-screen bg-gray-500  h-full fixed items-center flex justify-center content-center ">
         <SetupBackground/>
    
    
          <div className=" w-full h-auto h-auto md:w-2/3 bg-gray-200 rounded-xl mx-6">
            <div className="relative ">
    
                <div className="flex justify-center"><img  className="mt-9 rounded-full opacity-90 md:h-48 " src={"https://cdn.discordapp.com/avatars/"+props.user.discordId+"/"+props.user.discord.avatar}/></div>
            </div>
            <div className="flex text-center justify-center">
                <h1 className=" z-10 inline-block md:py-6 text-3xl md:text-5xl  ld:text-5xl md:mt-6 font-bold ">{w.SETUP_TITLE}</h1>
            </div>
            <div className=" ">
    
                <div className=" flex justify-center z-20">
                    <input onChange={(e)=> setUsername(e.target.value)} className="z-20 mt-12 w-2/3 md:w-2/5 top-8 bg-gray-600 rounded-full h-12 text-white text-center font-medium text-2xl capitalize" type="text" value={username}/>
                </div>
                <div className="flex  text-center justify-center">
                    <div className="px-12 mt-12 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse ">
                        <button onClick={() => onClickHandle()} className=" text-2xl h-14">{w.SETUP_BUTTON}</button> 
                    </div>
                </div>
                <div className="flex  text-center justify-center">
                    <div className="text-xl text-red-400 z-20  mt-5">{message}</div>
                </div>
            </div>
          </div>
        </div>
      );
};
