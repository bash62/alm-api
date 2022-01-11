import React, { useState, useEffect, Component } from "react";
import { Navigate } from "react-router-dom";
import {SetupUsername } from './SetupUsername';
import {SetupProfile } from './SetupProfile';
import {SetupFlag } from './SetupFlag';
import useFetch from "../../models/useFetch";
import SetupLoading from "./SetupLoading";
import SetupServers from "./SetupServers";
import SetupEnd from "./SetupEnd";

const Setup = ({ ...props }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);
  const [reload, setReload] = useState(false);
  const {
    data: w,
    loading: l,
    error: e,
  } = useFetch("http://localhost:3001/api/client/lang/SETUP/FR");

  useEffect(() => {
    setLoading(true);
    if (props.user === "unauthorized") {
      setLoading(false);
      setLoggedIn(false);
    }
    
    else if (props.user !== null) {
      setLoading(false);
      setLoggedIn(true);
      setUser(props.user);
    }
    if(reload){

      setReload(false);
      props.checkLoginStatus();
      console.log(props)
    }
  }, [props]);

 

  if (loading) {
    return <SetupLoading />;
  }


  else {
    if (!loggedIn && !loading) {
      return <Navigate to="/">unauthorized</Navigate>;
    }

    if (e) return <div>ERROR...</div>
    
  
    if(props.user.userRegisterState.stage === 0){
      return (
        <SetupUsername user={user} lang={w.ONE} reload={setReload} ></SetupUsername>
        );
    }

    else if(props.user.userRegisterState.stage === 1){
      return (
        <SetupProfile user={user} lang={w.TWO} reload={setReload} ></SetupProfile>
        );
    }
    else if(props.user.userRegisterState.stage === 2){
      return (
        <SetupFlag user={user} lang={w.FLAG} reload={setReload}></SetupFlag>
        );
    }
    else if(props.user.userRegisterState.stage === 3){
      return (
        <SetupServers user={user} lang={w.SERVER} reload={setReload}></SetupServers>
        );
    }
    else if(props.user.userRegisterState.stage === 4){
      return (
        <SetupEnd user={user} lang={w.SERVER} reload={setReload}></SetupEnd>
        );
    }
    
    return <div>ERROR...</div>
    


  }
};

export default Setup;
