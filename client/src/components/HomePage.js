import React from "react";
import Cards from "./Cards";
import { Login } from "./Login";


const HomePage = ({
    ...otherProps

}) => {
    return (
        <div>
             <Cards/>
             <Login/>
        </div>
   
    
    );
}


export default HomePage;