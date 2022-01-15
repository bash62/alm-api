import React,{useState} from "react";
 



const PassageInfo = ({
    ...props
}) => {


    return(
        <div className="flex w-full">
            <div className="bg-transparent w-0 md:w-2/5 h-screen flex items-center xl:justify-center  "></div>

            <div className="bg-red-500 w-full md:w-3/5 h-screen  xl:justify-center ">
                <PresentationPasseur/>
            </div>
        </div>

    )
}

const PassageInfoCard = () => (
    <div className="">
        
    </div>
)


const PresentationPasseur = () => (
    <div className="flex h-16 mt-36 ml-24 ">
        <div className="w-2/5 bg-gray-400 rounded-md flex items-center justify-center">
            <h1 className="text-xl md:text-4xl text-germania">Services de Tece</h1>
        </div>
    </div>

)

export default PassageInfo;