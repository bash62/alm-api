import React,{Component, useState} from "react";
import {Link} from 'react-router-dom';

import Dofus from '../assets/dofus_sanguinaire.png'


const Header = ({
    ...otherProps
}) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }
    return(
        <header className="bg-sky-700 relative ">
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
                absolute flex flex-col bg-sky-700 top-full w-full left-0 z-20
                md:static md:w-auto md:flex-row md:flex
            `}>
                <ul className="md:flex-row md:flex ">
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5">Passage</Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5">Passage</Link>
                    </li>
                    <li className="list-none md:mr-5">
                        <Link to="/" className="flex w-full text-base uppercase hover:text-red-600 cursor-pointer pt-2.5 px-2.5">Passage</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;