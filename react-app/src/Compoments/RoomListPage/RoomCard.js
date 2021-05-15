// import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RoomCard.css";

import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const rootApi = "https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/"
const partyIcon = "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-party-30--1-@2x.png";
const userNumIcon = "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-user-30-1@2x.png";
const RoomCardPage = (props)=>{
  
  return (<RoomCard roomid={props.roomid}/>);
}

const RoomCard = (props)=>{
  const[uids,setUids] = useState([]);
  const[roomName,setRoomName] = useState("");
  const[users,setUsers] = useState([]);
  const[roomInfo,setRoomInfo] = useState("");
  const history = useHistory();
  const handleRoom = () => {
    // const origin = window.origin
    // console.log(origin)
    // window.location = toString(origin) + "/#/room/test7"
    let path = `/room/`+props.roomid;
    history.push(path);
  }
  useEffect(()=>{
    fetch(rootApi+"room?roomID="+props.roomid)
      .then(response => response.json())
      .then((data) => {
        setRoomName(data.roomName);
        setRoomInfo(data.roomInfo);
        // console.log(data);
        setUids(data.members);
        // console.log(data.members);
      });
  },[props.roomid]);

  useEffect(()=>{
    if(uids.length >= 0){
      let usersList = [];
      uids.map((uid,i)=>{
        let api = rootApi + "user?clientId=" + uid;
        fetch(api)
        .then(response => response.json())
        .then((data) => {
            setUsers(users=>[...users,data]);
      });
      });

    }
  },[uids]);
  
  return (
      <div className="roomCard" style={{cursor: "pointer"}} onClick={handleRoom}>
        <div className="top">
            <h5 className="RoomTitle">{roomName}</h5>
            <p className="RoomInfo">{roomInfo}</p>
        </div>

        <div className="middle">
            <div className="container">
                {users.map((user,idx)=>{
                    return (<img className="avatar" key={idx} src={user.avatar.S}/>);
                })}
            </div>
            
        </div>

        <div className="bot">
            <div className="lineup">
                <img className="icon1" src={userNumIcon} />
                <div className="text">{"" + users.length + "/8"}</div>
                <div className="icon2">{"🔒"}</div>
            </div>   
        </div>
      </div>
  )
}

export default RoomCardPage;