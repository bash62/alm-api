import React, { useEffect,useState } from "react";


export const SetupFirstPage = ({ ...props }) => {
    console.log(props)
    const [w,setLang] = useState(null);
    const [loading,setLoading] = useState(true);
    const [username,setUsername] = useState("")

    useEffect(() => {
        console.log(username)
        setLoading(true);
        if(props.lang !== undefined && Object.entries(props.lang).length > 0 ){
            setLoading(false);
            setLang(props.lang);
        }
      }, [props]);
    
      if (loading) {
        return <div>loading...</div>;
      }

  return (

    <div className="w-screen bg-gray-500 h-screen items-center flex justify-center content-center ">
      <div className=" w-full  h-2/3 md:h-3/4  md:w-2/3 bg-gray-200 rounded-xl mx-6">
        <div className="relative ">
            <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
            <div className="flex ">
                <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
                <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
            </div>
            <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
            <div className="flex ">
                <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
                <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
            </div>
            <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
            <div className="flex justify-center"><img  className="absolute top-6 rounded-full opacity-90 md:h-48 " src={"https://cdn.discordapp.com/avatars/"+props.user.discordId+"/"+props.user.discord.avatar}/></div>

        </div>
        <div className="flex text-center justify-center">
            <h1 className=" z-10 inline-block md:py-6 text-3xl md:text-5xl  ld:text-5xl md:mt-6 font-bold ">{w.SETUP_TITLE}</h1>
        </div>
        <div className="relative ">
            <div className="bg-gray-100 rounded-xl m-2 h-8 animate-pulse"></div>
            <div className="flex ">
                <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6"></div>
                <div className="bg-gray-100 rounded-xl m-2 w-full h-6 animate-pulse"></div>
            </div>
            <div className="flex">
                <div className="bg-gray-100 rounded-xl m-2 w-full h-6"></div>
                <div className="bg-gray-100 rounded-xl m-2 w-1/3 h-6 animate-pulse"></div>
            </div>
            <div className=" flex justify-center z-20">
                <input onChange={(e)=> setUsername(e.target.value)} className="z-20 absolute w-2/3 md:w-2/5 top-8 bg-gray-600 rounded-full h-12 text-white text-center font-medium text-2xl capitalize" type="text"/>
            </div>
            <div className="flex  text-center justify-center">
                <div className="px-12 mt-12 z-30 bg-indigo-400 text-white rounded-md hover:animate-pulse ">
                    <button className=" text-2xl h-14">{w.SETUP_BUTTON}</button> 
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
