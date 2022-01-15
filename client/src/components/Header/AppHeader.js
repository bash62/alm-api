import React,{useState} from "react";
 
import Discord from "../../assets/discord.svg"
import AppHeaderLoading from "./AppHeaderLoading";

const AppHeader = ({
    ...props
}) => {


    if(props.lang === undefined ){
        return <AppHeaderLoading/>;
    }
    else{
        return(
            <div className="bg-gray-600 w-full h-24 ">
                <div className="justify-center items-center md:absolute right-0  flex ">
                    <div className=" flex py-2 my-6 px-2 mx-2 rounded-lg bg-gray-400  ">
                        <button className="mr-3 text-white ">{props.lang.HEADER_BUTTON}</button>
                        <img className="w-8" src={Discord} alt=""/>
                    </div>
    
    
                </div>
            </div>
        )
    }

}

export default AppHeader;