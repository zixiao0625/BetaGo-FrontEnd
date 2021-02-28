import './App.css';
import DeviceSetUp from './DeviceSetUp';
import JoinForm from './JoinForm';
import SignOut from '../Login/SignOut.js'
import { Auth } from 'aws-amplify';
import React, {useEffect} from 'react';

let ws

const HomePage = (props)=>{
    // Get Amplify ID
    const sessionInfo = Auth.currentSession();
    sessionInfo.then(response => {
        console.log(response.accessToken.payload.client_id)
      })
    console.log("INFO");

    // websocket connection
    ws = new WebSocket('wss://25atqp9l07.execute-api.us-east-1.amazonaws.com/dev')
    
    const initWebsocket = () => {
        ws.addEventListener("open", () => {
          sessionInfo.then(response => {
            console.log(response.accessToken.payload.client_id)
          })
          ws.send(JSON.stringify({"action": "connect", "clientId": "testing"}))
        });

        ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }


        ws.onclose = () => {
            console.log('disconnected')
        }
    }

    useEffect(() => {
        initWebsocket();
    });

    return (
        <div>
            <div className="page">
                <header className="App_header"></header>
                <div className="about_container">
                    <h1 id="title">Host a party 🔥</h1>
                    <JoinForm p={props}/>
                </div>   
            </div>
            <div className="device_access">
                <DeviceSetUp/>
            </div>
            <div className="btnSignOut">
                <SignOut />
            </div>
        </div>
    );
}

export default HomePage;
