import HomePage from './Compoments/HomePage/HomePage'
import Invitation from './Compoments/Invitation/Invitation'
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
