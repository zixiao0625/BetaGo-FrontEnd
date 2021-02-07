import HomePage from './components/HomePage/HomePage'
import Invitation from './components/Invitation/Invitation'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/invitation" component={Invitation} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;
