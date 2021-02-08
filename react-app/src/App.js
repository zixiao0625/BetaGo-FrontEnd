import HomePage from './Compoments/HomePage/HomePage.js'
import RoomPage from './Compoments/RoomPage/RoomPage.js'
import Invitation from './Compoments/Invitation/Invitation.js'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={RoomPage} />
        <Route exact path="/invitation" component={Invitation} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;
