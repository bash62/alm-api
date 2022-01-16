import React,{useState} from "react";
 
import Feedback from "../../assets/dofus/feedback.png"


const PassageAvis = ({
    ...props
}) => {


    return(
        <div className="flex h-full bg-black  ">
            <div className="bg-red-100 w-0 xl:w-2/5 h-screen flex items-center xl:justify-center "></div>
            <div className="h-full"></div>
            <PresentationAvis/>
        </div>
    )
}

const PresentationAvis = ({name="Avis du passeur"}) => (

    <div className="w-full ">
        <img src=""/>
        <div className="flex  justify-center  h-16  mb-6 mx-4 ">
            <div className="p-4 mt-2 text-white bg-discord-backgroundPurple rounded-md flex items-center justify-center">
                <h1 className="text-3xl  text-germania"> {name}</h1>
            </div>
        </div>
    </div>

)


export default PassageAvis;