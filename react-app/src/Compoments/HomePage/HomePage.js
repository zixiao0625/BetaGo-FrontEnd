import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import DeviceSetUp from './DeviceSetUp';
import JoinForm from './JoinForm';
import {AmplifySignOut} from '@aws-amplify/ui-react';
const HomePage = (props)=>{
    return (
        <div>
            <div className="page">
                <header className="App_header"></header>
                <div className="about_container">
                    <h1 id="title">Host a party 🔥</h1>
                    <JoinForm/>
                </div>   
            </div>
            <div className="device_access">
                <DeviceSetUp/>
            </div>
            <div>
                {/* <AmplifySignOut /> */}
            </div>
        </div>
    );
}

export default HomePage;
