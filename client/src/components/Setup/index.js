import React, { useState, useEffect, Component } from "react";
import { Navigate } from "react-router-dom";
import {SetupFirstPage } from './SetupFirstPage';
import useFetch from "../../models/useFetch";

const Setup = ({ ...props }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(null);
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

    return (
          <SetupFirstPage user={user} lang={w.ONE}></SetupFirstPage>
     
    );
  }
};

export default Setup;
