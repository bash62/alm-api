import React,{Component, useState} from "react";
import {Link} from 'react-router-dom';
import Bannier from '../../assets/banieretest-1.png'
import Dofus from '../../assets/dofus_sanguinaire.png'


const Header = ({
    ...otherProps
}) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }
    
    return(
        <header className="snap-start sticky top-0  z-40 w-full bg-yellow-400 ">
            
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5 ">
            <div className="w-14">
                <img src={Dofus} className="w-full"/>
            </div>
            <div onClick={onClick} className={`
                md:hidden uppercase
            `}> 
                Menu
            </div>
            <nav className={`
                ${!active && 'hidden'} 
                static flex flex-col top-full w-full left-0 z-20
                md:static md:w-auto md:flex-row md:flex
            `}>
                <ul className="md:flex-row md:flex ">
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">Passage</Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">KIT</Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5 font-black subpixel-antialiased">Mes services</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;