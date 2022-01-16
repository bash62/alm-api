import {React,} from "react";
 
import Scaraboss from "../../assets/bossminia.png"
import Photo from "../../assets/dofus/photo.png"
import SKULL from "../../assets/kill_img.png"
import KEYS from "../../assets/dofus/trousseau.png"
import KAMAS from "../../assets/kamas_img.png"





const PassageInfo = ({
    ...props
}) => {


    return(
        <div className="flex w-full">
            <div className="bg-transparent w-0 xl:w-2/5 h-screen flex items-center xl:justify-center  "></div>

            <div className=" w-full xl:w-3/5 h-auto  ">
            <PresentationPasseur/>

                <div className="block">
                    
                </div>

            <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 ">

                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
                <CardMob/>
            </div>
                

            </div>
        </div>

    )
}

const CardMob = () => (
    <div className="  ">
        <div>
            <PassageInfoCardTop/>
            <PassaInfoCardBottom/>
        </div>

    </div>
)

const PassaInfoCardBottom = () =>(
    <div className="card-passage-background-bottom flex justify-between overflow-hidden">
        <div className="flex items-center mx-4">
            <h1 className="text-bangers text-white "> 0 </h1>
            <ImagePassageInfo img={SKULL} />

        </div>
        <div className="flex items-center mx-4">
            <h1 className="text-bangers text-white "> NON </h1>
            <ImagePassageInfo img={KEYS} />

        </div>
        <div className="flex items-center mx-4">
            <h1 className="text-bangers text-white "> 500.000 </h1>
            <ImagePassageInfo img={KAMAS}  />

        </div>

    </div>
    )

const ImagePassageInfo = ({img}) =>(
    <img src={img} alt="" className=" w-8 h-8 ml-4" />

)



const PassageInfoCardTop = ({succesName="Sanctuaire du Qtan Tamer",succesChalenge="Nomade"}) => (
    <div className="flex card-passage-background-top ">
        <div className="w-auto max-w-[5em] bg-discord-backgroundPurple rounded-md">
            <img src={Scaraboss} className="w-auto max-w- h-auto p-1 -full bg-discord-backgroundPurple rounded-md" alt="Boss" ></img>

        </div>

        <div className="p-1 w-full flex justify-center mr-5 text-center relative">
            
            <div className="grid mx-1 ">
                <h1 className="text-white text-2xl text-germania  -mb-5 z-0">{succesName}</h1>
                <p className="text-sm xl:text-lg mt-2 mb-2 text-gray-300 text-germania italic">({succesChalenge})</p>
            </div>
            <div className="absolute -right-3 top-0">
                <button><img src={Photo} alt="" className="w-9 -py-4 top-0   z-0" /></button>

            </div>


        </div>
    </div>
)


const PresentationPasseur = ({name="Tece"}) => (

    <div className="flex h-16 justify-center xl:justify-start mb-6 mx-4 ">
        <div className="p-4 mt-2 text-white bg-discord-backgroundPurple rounded-md flex items-center justify-center">
            <h1 className="text-3xl  text-germania">Services de {name}</h1>
        </div>
    </div>

)

export default PassageInfo;