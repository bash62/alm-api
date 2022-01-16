import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

import Boss from '../../assets/bossminia.png'
import Metier from '../../assets/metier.png'
import Avatar from '../../assets/class_img.png'
import Success from '../../assets/success_img.png'
import Kill from '../../assets/kill_img.png'
import Kamas from '../../assets/roundedKamas_img.png'
import Bourse from '../../assets/bourseK_img.png'
import Personnage from '../../assets/perso_img.png'
const Cards = ({
    ...otherProps
}) => {
    return (
        <div className="bg-slate-300 snap-start ">
            <div className=" pt-8 text-center justify-center">
                <div className="flex justify-center">
                    <h1 className=" text-2xl mx-2 md:text-5xl md:mx-5 font-bold">Le passage  </h1>
                    <span className="text-2xl md:text-5xl font-italic">
                        <Typewriter loop={5} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} words={['Simple', 'Sécurisé', 'Fiable', 'No Noob, No Arnak']} />
                    </span>
                </div>

                <div className="w-3/4 md:w-2/6 bg-black h-1 mx-auto opacity-60 mt-8"></div>

            </div>
            
        <div className="flex flex-row flex-wrap py-14 justify-center  ">

            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5 mx-5">
                <div className="py-6 flex items-center justify-center ">

                    <div className="relative ">
                        <div className="absolute -right-5 -bottom-5 bg-yellow-400 h-full w-full rounded-xl"></div>

                        <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                            <div className="h-2 w-20 bg-yellow-400"></div>
                            <div className="text-5xl md:text-7xl font-extrabold text-white">18</div>
                            <p className="text-base md:text-lg text-gray-400 leading-snug"> Passages indexé. Trouve en un sur ton serveur ou propose en un !</p>
                            <Link className="block lg:text-xl text-yellow-400 font-bold tracking-wide" to="/">Learn More</Link>
                            <div className="flex flex justify-center ">
                                <div><Link to="/#" ><img src={Boss} className="rounded-full h-24 md:h-36 border-4 drop-shadow-md cursor-pointer mr-4 md:mr-10 infinite_logo "/></Link></div>
                                <div><Link to="/#" ><img src={Boss} className="rounded-full h-24 md:h-36 border-4 drop-shadow-md cursor-pointer mr-4 md:mr-10 infinite_logo "/></Link></div>
                                <div><Link to="/#" ><img src={Boss} className="rounded-full h-24 md:h-36 border-4 drop-shadow-md cursor-pointer mr-4 md:mr-10 infinite_logo "/></Link></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5 mx-5">
                <div className="py-6 flex items-center justify-center ">

                    <div className="relative ">
                        <div className="absolute md:-right-5 md:-bottom-5 -right-3 -bottom-3 bg-yellow-400 h-full w-full rounded-xl"></div>

                        <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                            <div className="h-2 w-20 bg-yellow-400"></div>
                            <div className="text-5xl md:text-7xl font-extrabold text-white">28</div>
                            <p className="text-base md:text-lg text-gray-400 leading-snug"> Offre de kit. Métier, Prêt de stuff, trouve en un sur ton serveur ou propose en un !</p>
                            <Link className="block lg:text-xl text-yellow-400 font-bold tracking-wide" to="/">Learn More</Link>

                            <div className="flex justify-center ">
                                <div><Link to="/#" ><img src={Metier} className="rounded-full h-24 md:h-36 border-4 drop-shadow-md cursor-pointer mr-4 md:mr-10 infinite_logo "/></Link></div>
                                <div><Link to="/#" ><img src={Metier} className="rounded-full h-24 md:h-36 border-4 drop-shadow-md cursor-pointer mr-4 md:mr-10 infinite_logo "/></Link></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full lg:w-3/6 xl:flex px-2.5 mb-5 mx-5">
                <div className="py-6 flex items-center justify-center ">

                    <div className="relative ">
                        <div className="absolute md:-right-5 md:-bottom-5 -right-3 -bottom-3 bg-yellow-400 h-full w-full rounded-xl"></div>

                        <div className="relative bg-gray-800 text-gray-50 rounded-xl p-8 space-y-7">
                            <div className="h-2 w-2/3 bg-yellow-400"></div>
                            <div className="text-5xl md:text-7xl font-extrabold text-white">Une sélection épuré </div>
                            <p className="text-base md:text-lg text-gray-400 leading-snug"> Trouve et commande un passage en seulement 2 clicks !</p>
                            <Link className="block lg:text-xl text-yellow-400 font-bold tracking-wide" to="/">Learn More</Link>

                            <div className=" bg-white h-auto ">
                                <div className=" flex relative -py-1">
                                <img src="https://static.ankama.com/dofus/www/game/monsters/200/31.png" className="h-16 md:h-24  m-4 md:m-6 rounded-full justify-center "/>

                                    <div className="flex  ">
                                        <div className="-my-1 md:my-4">
                                            <div className="text-black text-base md:text-2xl mt-6 ">Antichambre du Glourséleste</div>
                                            <p className="text-base md:text-lg text-gray-400 leading-snug  mb-6" >Vaincre le Glourséleste dans son donjon.</p>
                                        </div>
                                        
                                    </div>    
                                </div>

                                <div className=" flex justify-center">
                                        <div className="text-base md:text-2xl font-medium tracking-tighter text-black mx-2 my-1 md:my-1.5">10</div>
                                        <img className="h-8 md:h-10" src={Success}/>
                                </div>
                                
                                <div className=" bg-gray-500 my-auto h-1 md:h-2 self-center flex m-8  my-2 md:my-6  "></div> 
                                
                                <div className="content-center m-4 overflow-auto max-h-64">
                                    <table className="w-full text-black  ">
                                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                                            <tr>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-8" src={Personnage}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24 ">Passeur</th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24"><img className="max-h-8" src={Bourse}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-10" src={Kill}/></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="bg-gray-50 hover:bg-gray-400 cursor-pointer ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            
                                            

                                        </tbody>
                                    </table>
                                </div>


                            </div>

                            <div className=" bg-white h-auto ">
                                <div className=" flex relative -py-1">
                                <img src={Boss} className="h-16 md:h-24 bg-gray-400 m-4 md:m-6 rounded-full justify-center "/>

                                    <div className="flex  ">
                                        <div className="-my-1 md:my-4">
                                            <div className="text-black text-base md:text-2xl mt-6 ">Scaraboss Dorée</div>
                                            <p className="text-base md:text-lg text-gray-400 leading-snug  mb-6" >Vaincre le Glourséleste dans son donjon.</p>
                                        </div>
                                        
                                    </div>    
                                </div>

                                <div className=" flex justify-center">
                                        <div className="text-base md:text-2xl font-medium tracking-tighter text-black mx-2 my-1 md:my-1.5">10</div>
                                        <img className="h-8 md:h-10" src={Success}/>
                                </div>
                                
                                <div className=" bg-gray-500 my-auto h-1 md:h-2 self-center flex m-8  my-2 md:my-6  "></div> 
                                
                                <div className="content-center m-4 overflow-auto max-h-64">
                                    <table className="w-full text-black  ">
                                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                                            <tr>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-8" src={Personnage}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24 ">Passeur</th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24"><img className="max-h-8" src={Bourse}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-10" src={Kill}/></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            
                                            

                                        </tbody>
                                    </table>
                                </div>


                            </div>

                            <div className=" bg-white h-auto ">
                                <div className=" flex relative -py-1">
                                <img src={Boss} className="h-16 md:h-24 bg-gray-400 m-4 md:m-6 rounded-full justify-center "/>

                                    <div className="flex  ">
                                        <div className="-my-1 md:my-4">
                                            <div className="text-black text-base md:text-2xl mt-6 ">Scaraboss Dorée</div>
                                            <p className="text-base md:text-lg text-gray-400 leading-snug  mb-6" >Vaincre le Glourséleste dans son donjon.</p>
                                        </div>
                                        
                                    </div>    
                                </div>

                                <div className=" flex justify-center">
                                        <div className="text-base md:text-2xl font-medium tracking-tighter text-black mx-2 my-1 md:my-1.5">10</div>
                                        <img className="h-8 md:h-10" src={Success}/>
                                </div>
                                
                                <div className=" bg-gray-500 my-auto h-1 md:h-2 self-center flex m-8  my-2 md:my-6  "></div> 
                                
                                <div className="content-center m-4 overflow-auto max-h-64">
                                    <table className="w-full text-black  ">
                                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                                            <tr>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-8" src={Personnage}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24 ">Passeur</th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-24"><img className="max-h-8" src={Bourse}/></th>
                                                <th className="p-3 text-sm font-semibold tracking-wide text-left w-16 "><img className="max-h-10" src={Kill}/></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-gray-50 ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            <tr className="bg-white ">
                                                <td className="p-3 text-sm text-gray-700 "><img className="" src={Avatar}/></td>
                                                <td className=" text-sm text-gray-700 font-bold text-blue-500 hover:underline"><Link to="/">Tece</Link></td>
                                                <td className=" text-sm text-gray-700 flex py-9 ">500.000<img className="max-h-5" src={Kamas}/></td>
                                                <td className="p-6 text-sm text-gray-700 ">14</td>
                                            </tr>
                                            
                                            

                                        </tbody>
                                    </table>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
        )
}


export default Cards;