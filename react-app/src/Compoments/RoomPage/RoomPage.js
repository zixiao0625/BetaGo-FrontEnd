import React, { useState, useEffect,useRef} from "react";
import ReactDOM from 'react-dom';
import AgoraRTC from 'agora-rtc-sdk-ng'
import VideoGalley from "./VideoGalley.js";
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

export const RoomPage = (props)=>{
    const [peers, setPeers] = useState([]);
    const wsRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    // const roomID = props.match.params.roomID;
    const client = useRef()
    const [uid,setUid] = useState("")
    const videoRef = props.videoRef;
    useEffect(async ()=>{
        client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        const uId = await client.current.join(appId, "test", null);
        setUid(uId);
        let localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        let localVideoTrack = await AgoraRTC.createCameraVideoTrack();
        // Play localStream
        const localContainer = document.createElement("div");
   
        localContainer.id = "self";
        localContainer.style.width = "640px";
        localContainer.style.height = "480px";
        document.getElementById("Local-Stream").append(localContainer);
        localVideoTrack.play("self");
        await client.current.publish([localAudioTrack, localVideoTrack]);
        console.log("publish success!");
        client.current.on("user-published", async (user, mediaType) => {
            // 开始订阅远端用户。
            await client.current.subscribe(user, mediaType);
            console.log("subscribe success");
            // 表示本次订阅的是视频。
            if (mediaType === "video") {
              // 订阅完成后，从 `user` 中获取远端视频轨道对象。
                

              const remoteVideoTrack = user.videoTrack;
              setPeers([...peers,user.uid.toString()]);
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
              playerContainer.style.width = "640px";
              playerContainer.style.height = "480px";
              document.getElementById("VideoGalley").append(playerContainer);
          
              // 订阅完成，播放远端音视频。
              // 传入 DIV 节点，让 SDK 在这个节点下创建相应的播放器播放远端视频。
              remoteVideoTrack.play(user.uid.toString());
          
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
          });



          client.current.on("user-unpublished", (user, mediaType) => {
            if (mediaType === "video") {
              // 获取刚刚动态创建的 DIV 节点。
              var u_id = user.uid.toString();
              var index = peers.indexOf(u_id);
              setPeers(peers.splice(index,1));
              const PlayerContainer = document.getElementById(user.uid.toString());
              if (PlayerContainer){
                PlayerContainer.remove();
              }
              
                
            }
            console.log("Unsb User");
            console.log(user.uid.toString());
          });


    },[]);




    return (
    <div>
        "Hello"
    </div>
    );
}



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


export const Room =()=>{
    const videoRef = useRef()
    return(
        <div>
            Local
           <div id="Local-Stream" ></div>
           Remote
            <div id="VideoGalley" width="1800px" height="1800px" ref={videoRef}></div>
            <RoomPage videoRef={videoRef}/>
        </div>)
}

export default Room;