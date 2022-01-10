import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState,useEffect, Component } from "react";

import Axios from 'axios';
import {Login} from './components/Login/';
import {Test} from './components/Test';
import LandingPageLayout from './components/LandingPageLayout';
import Setup from "./components/Setup/";

class App extends Component {

  constructor(){
    super();

    this.state = {
      loggedInStatus: false,
      user: null,
    }
  }

  checkLoginStatus() {
    Axios.get('http://localhost:3001/api/auth/user', { withCredentials: true })
    .then(response => {
      this.setState({
        loggedInStatus: true,
        user: response.data,
      })
    })
    .catch(err => {
      
      this.setState({
        loggedInStatus: false,
        user: 'unauthorized',
      })
    });
  }

  componentDidMount(){
    this.checkLoginStatus();
  }
  

  render() {
    return (   
      <Router>
        <Routes >
          <Route path="/login" lang="FR" element={ <Login></Login>}></Route>
          <Route path="/test" element={ <Test user={this.state.user} auth={this.state.loggedInStatus} ></Test>}></Route>
          <Route path="/setup" element={ <Setup user={this.state.user} auth={this.state.loggedInStatus} ></Setup>}></Route>
          <Route path="/" element={ <LandingPageLayout user={this.state.user} auth={this.state.loggedInStatus} heading="Passage"></LandingPageLayout>}></Route>

        </Routes>

        
      </Router>
  )
}

}

export default App;
