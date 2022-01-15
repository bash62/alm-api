import React, {useState, useEffect, Component} from "react";
import {Navigate} from 'react-router-dom';

import Header from "../Header";
import Bg from '../../assets/background.png'
import HomePage from '../Home/HomePage';
import Footer from "../Footer";


const LandingPageLayout = ({
    heading,
    ...props
}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loggedIn,setLoggedIn] = useState(null);
    useEffect(() => {
        
        setLoading(true);
        if(props.user === "unauthorized"){
            setLoading(false);
            setLoggedIn(false);
        }
        else if(props.user !== null){
            setLoading(false);
            setLoggedIn(true);
            setUser(props.user);
        }

    }, [props]);

    if(loading){
        return <div>loading...</div>
    }
    
    if(loggedIn){
        
        return <Navigate to="/setup">unauthorized</Navigate>
    }
    else{

    return (
        <div className=" snap-y snap-mandatory min-h-full bg-gray-100 font-body ">
            <div className="h-screen flex flex-col ">
                <Header/>

                <div  className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat" style={{backgroundImage: `url(${Bg})`}} >
                    <div>
                        
                    </div>
                    {heading && <h1 className="relative px-2.5 text-white uppercase z-10 text-xl text-center md:text-6xl "></h1>}
                    <h1 className="relative px-2.5 text-yellow-400 font-bold uppercase z-10 text-xl text-center md:text-6xl "></h1>

                    <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-70"></div>    
                    <svg className="animate-bounce text-white absolute -bottom-0 py-24 md:py-64 lg:py-12 md:w-24 w-14 flex-none " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>       
                </div>

            
            </div>

            <div className="w-full max-w-7xl mx-auto">
                {props.children}
            </div>
        <HomePage/>
        <Footer/>
        </div>
    )}
}



LandingPageLayout.defaultProps = 'Heading';

export default LandingPageLayout;