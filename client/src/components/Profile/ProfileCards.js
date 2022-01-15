import React,{useState} from "react";
 
import HEART from '../../assets/icons_svg/heart.svg'


const ProfileCards = ({
    ...props
}) => {


    return(
        <div className="h-screen bg-gray-500 flex justify-center mt-12">
            <div className="w-full h-3/6 bg-gray-300 border border-gray-500">
                <div className="flex justify-between p-4  ">
                        <img  className=" w-8" src={HEART}/>
                        <div className="text-xl text-green">En ligne </div>
                </div>
                <div className="flex items-center justify-center -my-12">
                    <img className="rounded-full w-56" src="https://cdn.discordapp.com/avatars/907339231909785701/d21ec11e885bbb0a67ee05c51eb064b0"/>

                </div>
            </div>  

        </div>

    )
}

export default ProfileCards;