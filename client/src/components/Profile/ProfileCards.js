import {React,} from "react";
 
import Validate from '../../assets/dofus/validate.png'
import { FaHeart, FaLink, FaLocationArrow,FaUserAlt} from "react-icons/fa";
import { GiSwordsEmblem } from "react-icons/gi"
import   Happy from "../../assets/emojy/happy.svg";
import   Neutre from "../../assets/emojy/neutre.svg";
import   Sad   from "../../assets/emojy/sad.svg";
import   VerrySad  from "../../assets/emojy/unhappy.svg";
import   VerryHappy from "../../assets/emojy/veryhappy.svg";
import   Fr from "../../assets/flags/france.png";
import   Es from "../../assets/flags/spain.png";
import   Uk from "../../assets/flags/uk.png";

const ProfileCards = ({
    ...props
}) => {

    return(

        <div class="flex md:block justify-center ">
            <div className="w-full xl:w-2/5 xl:h-1/2 xl:flex items-center xl:justify-center xl:fixed bg-black ">

                <div className="card-profile-background  relative  " >
                    <div className="card-profile-background-top ">
                        <ProfileHeaderText/>
                        <ProfileHeaderLogo/>
                    </div>
                    <ProfileInfoLink name="Tece"/>
                    <ProfilInfoStats country="FR"/>
                </div>
            </div>
        </div>

    )
}

const ProfilInfoStats = ({country="FR"}) => (

    <div className="card-profile-background-bottom flex items-center justify-center ">
       

        <table className="table-auto ">
            <tbody>
                <tr className=" h-14">
                    <td className="">
                        <div className="flex">
                            <FaLocationArrow size="24"/>
                            <div className="mx-4  ">De</div>
                        </div>
                    </td>
                    <td className="flex justify-center items-center "><div className="  "><GetFlag className=" " country={country} /></div></td>
                </tr>
                <tr className=" h-14">
                    <td className="">
                        <div className="flex">
                            <FaUserAlt size="24"/>
                            <div className="mx-4  ">Membre depuis</div>
                        </div>
                    </td>
                    <td className="text-center text-bangers">janvier 2022</td>
                </tr>
                <tr>
                    <td className="">
                            <div className="flex">
                                <GiSwordsEmblem size="24"/>
                                <div className="mx-4  ">Nombres de commandes</div>
                            </div>
                        </td>
                    <td className="text-center text-bangers">22</td>


                </tr>


                
            </tbody>
        </table>

    </div>


)

const GetFlag = ({country="FR"}) => (
    <div>
        {country === "FR" &&
            <img className="w-12" alt="" src={Fr} />
        }
        {country === "EN" &&
            <img className="w-12" alt="" src={Uk} />
        }
        {country === "ES" &&
            <img className="w-12" alt="" src={Es} />
        }    </div>
)

const ProfileInfoLink = ({ name="XxRamboXx",href="",title="Chasseur de perco"}) => (
    
    <div className="card-profile-background-mid ">

        <div className=" flex justify-center items-center  ">
            <a href={href}><FaLink size="22"/></a>
            <h1 className="text-3xl text-gray-200 text-bold text-bangers ml-1" >{name}</h1>
            <img className="w-12 mb-1 " alt="" src={Validate}/>
        </div>
        
        <div className="flex justify-center items-center pb-1 ">
            <p className="text-xs italic text-gray-300">{title}</p>
        </div>
        <ProfileRating/>
        <Stroke/>
        
    </div>

)

const ProfileRating = () => (
    <div className="flex items-center justify-center">
        <Emoji src={VerrySad}score="0" />
        <Emoji src={Sad} score="1"/>
        <Emoji src={Neutre} score="2"/>
        <Emoji src={Happy} score="3"/>
        <Emoji src={VerryHappy}  score="4"/>
    </div>
)

const Stroke = () => (
    <div className="flex items-center px-5 py-2 justify-center ">
        <div className="w-3/4 h-0.5 rounded-full bg-gray-800"></div>
    </div>
)

const Emoji = ({src, score}) => (

    <div>
        {score != 2 ?
            <img className="w-6 opacity-60" alt="" src={src}/>
            :
            <img className="w-10" alt="" src={src}/>
        } 
        
    </div>
)


const ProfileHeaderLogo = () =>(
    <div className="flex items-center justify-center">
        <div className=" w-36 h-36 absolute top-6 bg-slate-300 rounded-full">

        </div>
    </div>
)

const ProfileHeaderText = () => (
    <div className="flex justify-between mx-8 pt-6">
        <button><FaHeart size="26"/></button>
        <p>En ligne</p>
    </div>
)



export default ProfileCards;