import React,{useState} from "react";
 
import Discord from "../../assets/discord.svg"


const AppHeaderLoading = ({
    ...props
}) => {


    return(
        <div className="bg-gray-600 w-full h-16 ">
            <div className="justify-center items-center md:absolute right-0  flex ">
                <div className=" flex py-2 my-6 px-2 mx-2 rounded-lg bg-gray-400  ">
                    <button className="mr-3 text-white bg-gray-500 rounded-full text-sm text-gray-500 ">Se connecter avec discord</button>
                    <div className="w-8 h-8 bg-black rounded-full" />
                </div>


            </div>
        </div>
    )
}

export default AppHeaderLoading;