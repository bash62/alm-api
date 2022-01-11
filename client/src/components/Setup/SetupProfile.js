import Axios from "axios";
import React, { useEffect,useState } from "react";

import SetupLoading from './SetupLoading';
import SetupBackground from './SetupBackground';

export const SetupProfile = ({ ...props }) => {
    const [w,setLang] = useState(null);
    const [loading,setLoading] = useState(true);
    const [profile,setprofile] = useState("")
    const [validate, setValidate] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setLoading(true);
        if(props.lang !== undefined && Object.entries(props.lang).length > 0 ){
            setLoading(false);
            setLang(props.lang);
        }
        if(validate){
            
            console.log("validated!!")
            
            setValidate(false);
        }
      }, [props, validate]);
    
      
     
      const onClickHandle =  () => {
        Axios.post('http://localhost:3001/api/user/update/setup/1',{profile: profile}, { withCredentials: true })
        .then( (res) => {
            setValidate(true);
            props.reload(true);
            
            console.log(props)
        })
        .catch((err)=>{
            setMessage(err.response.data.message)
            
        })

      };
    if (loading) {
        return <SetupLoading />;
    }
    if(validate){
        
        
        
    }
  

    return (

        <div className="w-screen bg-gray-500  h-full fixed items-center flex justify-center content-center ">
        
        <SetupBackground/>
    
    
          <div className=" w-full h-auto h-auto md:w-2/3 bg-gray-200 rounded-xl mx-6">
            <div className=" ">
    
                <div className="flex justify-center"><img  className="mt-9 rounded-full opacity-90 md:h-48 " src={"https://cdn.discordapp.com/avatars/"+props.user.discordId+"/"+props.user.discord.avatar}/></div>
            </div>
            <div className="flex text-center justify-center">
                <h1 className=" z-10 inline-block px-6 md:py-6 text-3xl md:text-5xl  ld:text-5xl md:mt-6 font-bold ">{w.SETUP_TITLE}</h1>
            </div>
            <div className=" ">
    
                <div className=" flex justify-center z-20">
                    <input onChange={(e)=> setprofile(e.target.value)} placeholder="https://www.dofus.com...75787400211-xX-Rambopl-Xx" className="placeholder:italic placeholder:text-gray-300 z-20 mt-12 w-2/3 md:w-2/4 top-8 bg-gray-600 rounded-full h-12 text-white text-center font-medium text-2xl " type="text"/>
                </div>
                <div className="flex  text-center justify-center">
                    <div className="px-12 mt-12 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse ">
                        <button onClick={() => onClickHandle()} className=" text-2xl h-14">{w.SETUP_BUTTON}</button> 
                    </div>
                </div>
                <div className="flex  text-center justify-center">
                    <div className="text-xl z-20  text-red-400 mt-5">{message}</div>
                </div>
            </div>
          </div>
        </div>
      );
};
