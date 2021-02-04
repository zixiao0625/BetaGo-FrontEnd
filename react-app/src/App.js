import logo from './logo.svg';
import './App.css';
import HomePage from './Compoments/HomePage/HomePage'
import RoomPage from './Compoments/RoomPage/RoomPage.js'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={RoomPage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;
