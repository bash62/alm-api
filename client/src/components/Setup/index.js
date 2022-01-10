

import React, {useState, useEffect, Component} from "react";
import {Navigate} from 'react-router-dom';

const Setup = ({
    ...props
}) => {
    console.log(props);
    
    if(!props.auth || props.user === {}){
        return (<div>FUCK NOT LOG</div>)
    }
    else{
        return(
            <div>OKKKK lets keep going</div>
        )
    }

}

export default Setup;




