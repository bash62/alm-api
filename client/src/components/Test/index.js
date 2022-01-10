

import React, {useState, useEffect, Component} from "react";
import {Navigate} from 'react-router-dom';

export const Test = ({
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
    
    if(!loggedIn){
        
        return <Navigate to="/">unauthorized</Navigate>
    }

    else {
        
        return <div>AUTORIZED</div>
    }

    
}




