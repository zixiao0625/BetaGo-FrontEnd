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
        console.log(response.idToken.payload.sub)
    })
    console.log("INFO");

    // websocket connection
    ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
    
    const initWebsocket = () => {
        ws.addEventListener("open", () => {
          sessionInfo.then(response => {
            ws.send(JSON.stringify({"action": "onMessage", "clientId": response.idToken.payload.sub, "userName": response.accessToken.payload.username}))
          })
        });

        ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        ws.onclose = () => {
            console.log('disconnected')
            window.alert("Your session is time out!");
        }
    }

    useEffect(() => {
        initWebsocket();
    });

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        sessionInfo.then(response => {
            console.log(response.idToken.payload.sub)
            ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.accessToken.payload.client_id}))
        })
    })

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
            
            {/* <div className="btnSignOut">
                <SignOut 
                    websocket = {ws}
                    session = {sessionInfo}
                />
            </div> */}
        </div>
    );
}

export default HomePage;
