// This file is a demo to send Friend Request to other peers with agora rtm.

import useAgoraRTM from "../../useRTM";
import AgoraRTM from 'agora-rtm-sdk';
import { useEffect } from "react";
const appId= "a3624becc6624c74959bd7f7975e89ed";
const client = AgoraRTM.createInstance(appId);
const FriendTest= (props) =>{
    
    const uid = props.match.params.uid;//Should get from amplify or db,currently use link to test
    const{requests,sendRequest,confirmRequest} = useAgoraRTM(uid,client);
    // test send message from id aaa to bbb, for test purpose only
    useEffect(()=>{
        console.log("requests change");
        console.log(requests);
    },[requests])//console log the requests list
    const sendtoB = ()=>{
        let result = sendRequest("bbb");
        console.log(result);
    }
    const sendToA=()=>{
        let result = sendRequest("aaa");
        console.log(result);
    }

    const confirmA = ()=>{
        confirmRequest("aaa");//delete uid aaa from requests
    }

    const confirmB = ()=>{
        confirmRequest("bbb");//delete uid bbb from requests
    }

    return(
        <div>
            <button onClick={sendtoB}>send to B</button>
            <button onClick={sendToA}>send to A</button>
            <button onClick={confirmB}>confirm B</button>
            <button onClick={confirmA}>confirm A</button>
        </div>
        
    )
}

export default FriendTest;