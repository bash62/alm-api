import React  from "react";
import Header from "./Header";
import Bg from '../assets/hero.jpg'
import HomePage from './HomePage';
import Footer from "./Footer";
import Arrow from "../assets/arrow.png"

const LandingPageLayout = ({
    heading,
    ...otherProps
}) => {
    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="h-screen flex flex-col">
                <Header/>

                <div className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat" style={{backgroundImage: `url(${Bg})`}} >
                    {heading && <h1 className="relative px-2.5  text-white uppercase z-10 text-4xl text-center md:text-6xl ">{heading}</h1>}
                    <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"></div>
                    <svg className="animate-bounce text-white absolute -bottom-0 py-24 md:py-14 md:py-64 lg:py-12 md:w-24 w-14  flex-none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                    
                    
                </div>
                

            </div>

            <div className="w-full max-w-7xl mx-auto">
                {otherProps.children}
            </div>
        <HomePage/>
        <Footer/>
        </div>
    )
}

LandingPageLayout.defaultProps = 'Heading';

export default LandingPageLayout;