import logo from './logo.svg';
import './App.css';
import HomePage from './Compoments/HomePage/HomePage'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;
