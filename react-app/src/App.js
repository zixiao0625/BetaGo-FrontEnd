import HomePage from './Compoments/HomePage/HomePage.js'
import {RoomPage,Room} from './Compoments/RoomPage/RoomPage.js'
import Invitation from './Compoments/Invitation/Invitation.js'
import Login from './Compoments/Login/Login.js'
import Contacts from './Compoments/Contacts/Contacts.js'
import React, { useState, useEffect } from "react";
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const AppContext = React.createContext();

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/room" component={HomePage} />
        <Route exact path="/room/:roomid" component={Room} />
        <Route exact path="/invitation" component={Invitation} />
        <Route exact path="/contacts" component={Contacts} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  )
}

export default withAuthenticator(App);
