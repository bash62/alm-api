import React, { useState, useEffect, Component } from "react";
import { Navigate } from "react-router-dom";
import {SetupFirstPage } from './SetupFirstPage';
import useFetch from "../../models/useFetch";

const Setup = ({ ...props }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);
  const [reload, setReload] = useState();
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
    } else if (props.user !== null) {
      setLoading(false);
      setLoggedIn(true);
      setUser(props.user);
    }
  }, [props]);

 

  if (loading) {
    return <div>loading...</div>;
  }

  if (!loggedIn) {
    return <Navigate to="/">unauthorized</Navigate>;
  } else {
    if (loading || w === {}) {
      return <div>Loading...</div>;
    }

    if (e) console.log(e);

  
    if(props.user.userRegisterState.stage === 0){
      return (
        <SetupFirstPage user={user} lang={w.ONE} ></SetupFirstPage>
        );
    }

    else if(props.user.userRegisterState.stage === 1){
      return (
        <div>1...</div>
        );
    }
    if(props.user.userRegisterState.stage === 2){
      return (
        <SetupFirstPage user={user} lang={w.ONE}></SetupFirstPage>
        );
    }
    
    return <div>ERROR...</div>
    


  }
};

export default Setup;
