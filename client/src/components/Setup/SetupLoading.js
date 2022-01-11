import React, { useEffect,useState } from "react";
import SetupBackground from './SetupBackground';


const SetupLoading = ({ ...props }) => {

    
   
    return (

        <div className="w-screen bg-gray-500  h-full fixed items-center flex justify-center content-center ">

        <SetupBackground/>
    
          <div className=" w-full h-auto  md:w-2/3 bg-gray-200 rounded-xl mx-6">
            <div className="relative ">
    
            <div className="flex justify-center"><div className="mt-9 rounded-full bg-gray-500 w-48 opacity-90 h-48 "></div></div>
            </div>
            <div className="flex text-center justify-center">
                <h1 className=" z-10 inline-block md:py-6 text-3xl md:text-5xl ld:text-5xl md:mt-6 font-bold ">Loading... </h1>
            </div>
            <div className=" ">
    
                <div className=" flex justify-center z-20">
                    <input  className="z-20 mt-12 w-2/3 md:w-2/5 top-8 bg-gray-600 rounded-full h-12 text-white text-center font-medium text-2xl capitalize" type="text"/>
                </div>
                <div className="flex  text-center justify-center">
                    <div className="px-12 mt-12 z-30 bg-indigo-400 text-white rounded-md  ">
                        <button  className=" text-2xl h-14 w-full text-indigo-400">Valider</button> 
                    </div>
                </div>

            </div>
          </div>
        </div>
      );
};

export default SetupLoading;