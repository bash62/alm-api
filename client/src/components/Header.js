import React,{Component} from "react";
import dofus from '../assets/dofus_sanguinaire.png'
import arrow from '../assets/arrow.png'

import bg from '../assets/bg.png'

export class Header extends Component {
    render(){
        return (
            <div className="flex-col">


                <div className=" h-full bg-repeat-x w-screen bg-bg inset-0 w-fit"></div>

                <div className=" flex-col items-center flex">
                    <ul className=" fixed flex pt-4 h-16 items-center z-10 ">
                        <li><a href="#" className=" tracking-tighter z-10 m-4 text-lg md:text-xl font-medium antialiased font-mono text-center ">Discord</a></li>
                        <img src={dofus} className="h-24 mt-10"  ></img>
                        <li><a href="#" className="tracking-tighter z-10 m-4 text-lg md:text-xl font-medium antialiased font-mono text-center " >Espace passeur</a></li>
                    </ul>

                </div>


            


            </div>

          );
        }
   
    }



export default Header;