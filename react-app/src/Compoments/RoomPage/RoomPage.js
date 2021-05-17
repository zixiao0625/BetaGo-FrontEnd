import React, { useState, useEffect,useRef} from "react";
import ReactDOM from 'react-dom';
import AgoraRTC from 'agora-rtc-sdk-ng';
import SignOut from '../Login/SignOut.js'
import VideoGalley from "./VideoGalley.js";
import ToolBar from "./ToolBar.js"
import "./RoomPage.css";
import { Auth } from 'aws-amplify'
import { Box } from "@material-ui/core"
import { Popover } from '@material-ui/core'
import demoPic from '../../Icons/avatar.jpg'
import "./style.css";
import "./bootstrap.min.css"
require('bootstrap')

const appId= "a3624becc6624c74959bd7f7975e89ed";
const rootApi = "https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/room";

const UserCard = (props)=>{
  return(
  <div id={props.uid} className="Video">

  </div>)
}


export const RoomController = (props)=>{
    const client = useRef();
    const [uids,setUids] = useState([]);
    const videoRef = props.videoRef;
    const[clientPrep,setClientPrep]=useState(false);
    const localAudioTrack = useRef();
    const localVideoTrack = useRef();
    useEffect(async ()=>{
   
        if(props.cid !== ""){
          window.addEventListener('unload', leaveUp, false);
          client.current = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
          localAudioTrack.current = await AgoraRTC.createMicrophoneAudioTrack();
          localVideoTrack.current = await AgoraRTC.createCameraVideoTrack();
          client.current.on("user-joined",onUserJoin);
          client.current.on("user-left",onUserLeft);
          client.current.on("user-published",onUserPublish);
          client.current.on("user-unpublished",onUnpublish);
          console.log("AAAAAAAAAAAAAAAAA");
          console.log(props.cid);
          
          // const localContainer = document.createElement("div");
          // localContainer.id = "self";
          // localContainer.style.width = "640px";
          // localContainer.style.height = "480px";
          // document.getElementById("Local-Stream").append(localContainer);
          //localVideoTrack.play("self");
          await client.current.join(appId, props.roomID, null);
          fetch(rootApi+"?roomID="+props.roomID+"&uid="+props.cid+"&action=join", {
            method: 'PATCH', // or 'PUT'
            })
            .then(response => response.json())
            .then(data => {
                if (data === "Update!"){
                    console.log("succeed!");
                    // props.p.history.push(`/room/${id}`);
                }
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
          
          meet();
          //await client.current.publish([localAudioTrack, localVideoTrack]);
          //setUids([...uids,uId]);
          setClientPrep(true);
        }

        return async()=>{
          leaveUpdate();
          leaveCall();
        };
    },[props.cid]);



    useEffect(async()=>{
      if(clientPrep){
        if(props.micOn){
          await client.current.publish([localAudioTrack.current]);
        } else {
          await client.current.unpublish([localAudioTrack.current]);
        }
        if(props.camOn){
          await client.current.publish([localVideoTrack.current]);
          localVideoTrack.current.play("self");
        } else {
          await client.current.unpublish([localVideoTrack.current]);
          localVideoTrack.current.stop();
        }
      }
    },[props.micOn,props.camOn,clientPrep])



    const meet = async()=>{
      fetch(rootApi+"?roomID="+props.roomID)
      .then(response => response.json())
      .then((data) => {
        let users = data.members;
        users.map(async (uid)=>{
          let url = "https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user/add-friend?self=" + props.cid + "&friend="+uid;
          await fetch(url, {
            method: 'PATCH'});
        })
      });
    }
    const onUserJoin = async (user)=>{
      // const playerContainer = document.createElement("div");
      // //给这个 DIV 节点指定一个 ID，这里指定的是远端用户的 UID。
      // playerContainer.id = user.uid.toString();
      // playerContainer.innerHTML="AAA";
      // playerContainer.className="Video";
      // document.getElementById("VideoGalley").append(playerContainer);
      // const playerContainer = <UserCard uid={user.uid.toString()}/>
      // ReactDOM.render(playerContainer, document.getElementById('VideoGalley'));
      // document.getElementById("VideoGalley").append(playerContainer);
      props.userJoin(user.uid.toString());
    }

    const onUserLeft=async(user)=>{
      // const PlayerContainer = document.getElementById(user.uid.toString());
      // PlayerContainer.remove();
      props.userLeave(user.uid.toString());
    }


    const onUserPublish =async (user, mediaType) => {
        // 开始订阅远端用户。
        await client.current.subscribe(user, mediaType);
        console.log("subscribe success");

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
          // const playerContainer = document.createElement("div");
          // playerContainer.id = user.uid.toString();
          // setUids([...uids,user.uid.toString()]);
          // playerContainer.className="Video";
          // document.getElementById("VideoGalley").append(playerContainer);
        
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
    }



    const onUnpublish = async(user, mediaType) => {
        // await client.current.subscribe(user, mediaType);
        // if (mediaType === "video") {
        // // 获取刚刚动态创建的 DIV 节点。
        //     // var u_id = user.uid.toString();
        //     // const PlayerContainer = document.getElementById(user.uid.toString());
        //     // PlayerContainer.remove();
        //     const remoteVideoTrack = user.videoTrack;
        //     remoteVideoTrack.stop(user.uid.toString());
        // }

        // if (mediaType === "audio") {
        //   // 订阅完成后，从 `user` 中获取远端音频轨道对象。
        //   const remoteAudioTrack = user.audioTrack;
        //   // 播放音频因为不会有画面，不需要提供 DOM 元素的信息。
        //   remoteAudioTrack.stop();
        // }
    }
    const leaveUp = ()=>{
      navigator.sendBeacon(rootApi+ "/action"+"?roomID="+props.roomID+"&uid="+props.cid+"&action=leave");
    }
    const leaveUpdate = async()=>{
      const sessionInfo = Auth.currentSession();
      const session = await sessionInfo;
      const clientId = session.idToken.payload.sub;

      fetch(rootApi+"?roomID="+props.roomID+"&uid="+clientId+"&action=leave", {
        method: 'PATCH', // or 'PUT'
        })
        .then(response => response.json())
        .then(data => {
            if (data === "Update!"){
                console.log("succeed!");
                // props.p.history.push(`/room/${id}`);
            }
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    async function leaveCall() {
        // 销毁本地音视频轨道。
        
        localAudioTrack.close();
        localVideoTrack.close();
      
        // 遍历远端用户。
        client.current.remoteUsers.forEach(user => {
          // 销毁动态创建的 DIV 节点。
          // const playerContainer = document.getElementById(user.uid);
          // playerContainer && playerContainer.remove();
          props.userLeave(user.uid.toString());
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
    const[micOn,setMicOn]=useState(false);
    const[camOn,setCamOn]=useState(true);
    const[users,setUsers]=useState([]);
    const[cid,setCid] = useState(""); 
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [userBio, setUserBio] = useState(localStorage.getItem('userBio'))
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
    const [anchorEl, setAnchorEl] = useState(null)
    const [anchorElEdit, setAnchorElEdit] = useState(null)
    const [anchorElNav, setAnchorElNav] = useState(null)
    const openEdit = Boolean(anchorElEdit)
    const openNav = Boolean(anchorElNav)
    const roomID = props.match.params.roomid;
    // websocket connection
    const ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
    // Get Amplify ID
    const sessionInfo = Auth.currentSession();

    useEffect(async()=>{
      const sessionInfo = Auth.currentSession();
      const session = await sessionInfo;
      const clientId = session.idToken.payload.sub;
      setCid(clientId);
    },[])
    
    const onMicClick = ()=>{
      setMicOn(!micOn)
    }

    const onCamClick=()=>{
      setCamOn(!camOn);
    }

    const userJoin=(uid)=>{
      // console.log("temADD");
      // console.log(users);
      setUsers(users=>[...users,uid]);
      // let temp = [...users];
      // temp.push(uid);
      // setUsers(temp);
    }

    const userLeave=(uid)=>{
      // let temp = [...users];
      // console.log("temp");
      // console.log(temp);
      setUsers(users=>[...users].filter(item=>item!==uid));
      // setUsers(temp.filter(item => item !== uid));
    }

    const handleCloseNav = () => {
      setAnchorElNav(null)
    }

    const handleClickI = (event) => {
      console.log('111', event)
      setAnchorElNav(event.currentTarget);
    }

    const handleInvitation = () => {
      const origin = window.location.origin
      window.location.replace(origin + '/#/invitation')
    }

    const showProfile = (event) => {
      setAnchorEl(event.currentTarget);
    }
  
    const showEdit = (event) => {
      setAnchorElEdit(event.currentTarget)
    }

    const signOut = () => {
      // Get Amplify ID
      const sessionInfo = Auth.currentSession()
  
      // websocket connection; Sign Out
      const ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
      sessionInfo.then(response => {
          ws.send(JSON.stringify({"action": "updateStatus", "cliendId": response.idToken.payload.sub}))
      })
      Auth.signOut()
      window.location = "/"
    }


    return(
        <div>
          <header className="p-3 mb-3 border-bottom">
            <div className="container" style={{ zIndex: '11' }}>
              {/* <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> */}
                <Box display='flex' flexDirection='row' justifyContent='space-between' style={{ width: '100%'}} >
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                  <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  {/* 留个位置room: 可以把roomname抓下来 */}
                  <li><a href="#" className="nav-link px-2 link-secondary">Room:</a></li>
                </ul>     
                <div className="dropdown text-end" style={{ marginTop: '7px' }}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a 
                    // href="" 
                    // className="d-block link-dark text-decoration-none dropdown-toggle" 
                    // id="dropdownUser1" 
                    // data-bs-toggle="dropdown" 
                    // aria-expanded="true"
                    // onClick={handleClickI}
                  >
                    {avatar === ''
                      ? <img src={demoPic} alt="mdo" width={32} height={32} className="rounded-circle" />
                      : <img src={avatar} alt="mdo" width={32} height={32} className="rounded-circle" /> }
                  </a>
                  <Popover
                    id='simple-popover'
                    open={openNav}
                    anchorEl={anchorElNav}
                    onClose={handleCloseNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    style={{height: '400px', width: '100%' }}
                  > 
                    <div>
                      <ul style={{ width: '200px' }}>
                        <li><a className="dropdown-item" href="#">Notification</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleInvitation}>Invitations</a></li>
                        <li><a className="dropdown-item" href="#" onClick={showProfile}>Profile</a></li>
                        <li><a className="dropdown-item" href="#" onClick={showEdit}>Edit Info</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#" onClick={signOut}>Sign out</a></li>
                      </ul>
                    </div>
                  </Popover>
                </div>
                </Box>
              {/* </div> */}
            </div>
          </header>
          <div>
          <div id="VideoGalley" width="100%" height="80%" >
            <div id="self" className="Video"></div>
            {users.map(user=>{
              return <UserCard key={user} uid={user}/>
            })}
          </div>
          <div>
            <ToolBar micOn={micOn} camOn={camOn} onMicClick={onMicClick} onCamClick={onCamClick}/>
          </div>
          <div className="btnSignOut">
              <SignOut 
                websocket = {ws}
                session = {sessionInfo}
              />  
          </div>
          <RoomController userJoin={userJoin} userLeave={userLeave} micOn={micOn} camOn={camOn} roomID={roomID} cid={cid} />
          </div>
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