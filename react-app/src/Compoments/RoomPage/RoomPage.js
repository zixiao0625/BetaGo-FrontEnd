import React, { useState, useEffect,useRef} from "react";
import ReactDOM from 'react-dom';
import AgoraRTC from 'agora-rtc-sdk-ng';
import SignOut from '../Login/SignOut.js'
import VideoGalley from "./VideoGalley.js";
import ToolBar from "./ToolBar.js"
import "./RoomPage.css";
const rtc = {
    // 用来放置本地客户端。
    client: null,
    localAudioTrack: null,
    localVideoTrack: null,
};
var options = {
    // 替换成你自己项目的 App ID。
    appId: "a3624becc6624c74959bd7f7975e89ed",
    // 传入目标频道名。
    channel: "demo_channel_name",
    // 如果你的项目开启了 App 证书进行 Token 鉴权，这里填写生成的 Token 值。
    token: null,
  };

rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const appId= "a3624becc6624c74959bd7f7975e89ed";

export const RoomController = (props)=>{
    const client = useRef();
    const [uids,setUids] = useState([]);
    const videoRef = props.videoRef;
    let localAudioTrack;
    let localVideoTrack;
    useEffect(async ()=>{
        client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        
        client.current.on("user-published",onUserPublish);
        client.current.on("user-unpublished",onUnpublish);
        client.current.on("user-joined",onUserJoin);
        
        // const localContainer = document.createElement("div");
        // localContainer.id = "self";
        // localContainer.style.width = "640px";
        // localContainer.style.height = "480px";
        // document.getElementById("Local-Stream").append(localContainer);
        localVideoTrack.play("self");
        const uId = await client.current.join(appId, "test", null);
        await client.current.publish([localAudioTrack, localVideoTrack]);
        setUids([...uids,uId]);
    },[]);

    const onUserJoin = async (user)=>{

    }

    const onUserLeave=async(user)=>{}

    const MicMute = async ()=>{
      await client.current.unpublish(localVideoTrack);
    }

    const VideoMute=async()=>{
      await client.current.unpublish(localVideoTrack);
    }

    const onUserPublish =async (user, mediaType) => {
        // 开始订阅远端用户。
        await client.current.subscribe(user, mediaType);
        console.log("subscribe success");
        console.log("I fcking get the user!!!!!");
        // 表示本次订阅的是视频。
        if (mediaType === "video") {
          // 订阅完成后，从 `user` 中获取远端视频轨道对象。
            
        const remoteVideoTrack = user.videoTrack;
        //   const PlayerContainer = React.createElement("div", {
        //     id: user.uid.toString(),
        //     className: "stream",
        //     width:"480px",
        //     height:"680px",
        //   });
        //   ReactDOM.render(
        //     PlayerContainer,
        //     document.getElementById("VideoGalley")
        //   );
          // 动态插入一个 DIV 节点作为播放远端视频轨道的容器。
        const playerContainer = document.createElement("div");
        //   // 给这个 DIV 节点指定一个 ID，这里指定的是远端用户的 UID。
        playerContainer.id = user.uid.toString();
        setUids([...uids,user.uid.toString()]);
        playerContainer.className="Video";
        // playerContainer.style.width = "640px";
        // playerContainer.style.height = "480px";
        document.getElementById("VideoGalley").append(playerContainer);
      
          // 订阅完成，播放远端音视频。
          // 传入 DIV 节点，让 SDK 在这个节点下创建相应的播放器播放远端视频。
        remoteVideoTrack.play(playerContainer);
      
          // 也可以只传入该 DIV 节点的 ID。
          // remoteVideoTrack.play(playerContainer.id);
        }
      
        // 表示本次订阅的是音频。
        if (mediaType === "audio") {
          // 订阅完成后，从 `user` 中获取远端音频轨道对象。
          const remoteAudioTrack = user.audioTrack;
          // 播放音频因为不会有画面，不需要提供 DOM 元素的信息。
          remoteAudioTrack.play();
        }
        console.log("Subscribe User:");
        console.log(user.uid.toString());
    }



    const onUnpublish = (user, mediaType) => {
        if (mediaType === "video") {
        // 获取刚刚动态创建的 DIV 节点。
            var u_id = user.uid.toString();
            const PlayerContainer = document.getElementById(user.uid.toString());
            PlayerContainer.remove();


        }
    }
    async function leaveCall() {
        // 销毁本地音视频轨道。
        localAudioTrack.close();
        localVideoTrack.close();
      
        // 遍历远端用户。
        client.current.remoteUsers.forEach(user => {
          // 销毁动态创建的 DIV 节点。
          const playerContainer = document.getElementById(user.uid);
          playerContainer && playerContainer.remove();
        });
      
        // 离开频道。
        await client.current.leave();
    }


    return (
    <div>
    </div>
    );
}

export const Room =(props)=>{
    const videoRef = useRef()
    const roomID = props.match.params.roomID;
    console.log(roomID);
    return(
        <div>
            <div id="VideoGalley" width="100%" height="80%" >
              <div id="self" className="Video"></div>
            </div>
            <div>
              <ToolBar/>
            </div>
            <div className="btnSignOut">
                <SignOut />  
            </div>
            <RoomController/>
        </div>)
}

export default Room;

// const StyledVideo = styled.video`
//     height: 40%;
//     width: 50%;
// `;

// const Video = (props) => {
//     const ref = useRef();

//     useEffect(() => {
//         props.peer.on("stream", stream => {
//             ref.current.srcObject = stream;
//         })
//     }, []);

//     return (
//         <StyledVideo playsInline autoPlay ref={ref} />
//     );
// }
// const Room = (props) => {
//     const [peers, setPeers] = useState([]);
//     const socketRef = useRef();
//     const userVideo = useRef();
//     const peersRef = useRef([]);
//     const roomID = props.match.params.roomID;

//     useEffect(() => {
//         socketRef.current = io.connect("/");
//         navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
//             userVideo.current.srcObject = stream;
//             socketRef.current.emit("join room", roomID);
//             socketRef.current.on("all users", users => {
//                 const peers = [];
//                 users.forEach(userID => {
//                     const peer = createPeer(userID, socketRef.current.id, stream);
//                     peersRef.current.push({
//                         peerID: userID,
//                         peer,
//                     })
//                     peers.push(peer);
//                 })
//                 setPeers(peers);
//             })

//             socketRef.current.on("user joined", payload => {
//                 const peer = addPeer(payload.signal, payload.callerID, stream);
//                 peersRef.current.push({
//                     peerID: payload.callerID,
//                     peer,
//                 })

//                 setPeers(users => [...users, peer]);
//             });

//             socketRef.current.on("receiving returned signal", payload => {
//                 const item = peersRef.current.find(p => p.peerID === payload.id);
//                 item.peer.signal(payload.signal);
//             });
//         })
//     }, []);

//     function createPeer(userToSignal, callerID, stream) {
//         const peer = new Peer({
//             initiator: true,
//             trickle: false,
//             stream,
//         });

//         peer.on("signal", signal => {
//             socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
//         })

//         return peer;
//     }

//     function addPeer(incomingSignal, callerID, stream) {
//         const peer = new Peer({
//             initiator: false,
//             trickle: false,
//             stream,
//         })

//         peer.on("signal", signal => {
//             socketRef.current.emit("returning signal", { signal, callerID })
//         })

//         peer.signal(incomingSignal);

//         return peer;
//     }

//     return (
//         <Container>
//             <StyledVideo muted ref={userVideo} autoPlay playsInline />
//             {peers.map((peer, index) => {
//                 return (
//                     <Video key={index} peer={peer} />
//                 );
//             })}
//         </Container>
//     );
// };