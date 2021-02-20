import HomePage from './Compoments/HomePage/HomePage.js'
import {RoomPage,Room} from './Compoments/RoomPage/RoomPage.js'
import Invitation from './Compoments/Invitation/Invitation.js'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';

const AppContext = React.createContext();

function App() {
  return (
    
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/room/:roomid" component={Room} />
        <Route exact path="/invitation" component={Invitation} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default App;
