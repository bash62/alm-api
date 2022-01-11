import React, { useEffect, useState } from "react";
import SetupBackground from './SetupBackground';





const SetupEnd = ({ ...props }) => {

    const [w, setLang] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (props.lang !== undefined && Object.entries(props.lang).length > 0) {
          setLoading(false);
          setLang(props.lang);
          
        }
      }, [props]);
  return (
    <div className="w-full bg-gray-500  h-full fixed items-center flex justify-center content-center ">
        
        <SetupBackground/>
        <div className=" flex z-30 text-4xl md:text-5xl xl:text-7xl">{w.TITLE} <img  className="mx-6 w-12 md:w-14 xl:w-16" src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="70"/> </div>

        <div className="">

        </div>
    </div>
  );
};

export default SetupEnd;
