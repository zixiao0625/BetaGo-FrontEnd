import React, { useState, useEffect } from "react";
import "./style.css";
import "./bootstrap.min.css"
import { Box } from "@material-ui/core"
import { Auth } from 'aws-amplify'
import Profile from '../Contacts/Profile.js'
import Contacts from '../Contacts/Contacts.js'
import { Popover } from '@material-ui/core'
import UploadCard from "../Contacts/UploadCard";
import demoPic from '../../Icons/avatar.jpg'
import RoomCardPage from "./RoomCard";
import plusButton from "../../Icons/plus.svg";
import logo from "../../Icons/toplogo.svg";
import empty from "../../Icons/empty.svg";
import { useHistory } from "react-router-dom";
import { listenerCount } from "superagent";
import HomePage from '../HomePage/HomePage.js'
import Button from '@material-ui/core/Button';
import { CardColumns } from "react-bootstrap";
require('bootstrap')



//You need this npm package to do createReactClass
const RoomListPage = () => {
  const [cid,setCid] = useState("");
  const [userName, setUserName] = useState('');
  const [userBio, setUserBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElEdit, setAnchorElEdit] = useState(null);
  const [anchorElRoom, setAnchorElRoom] = useState(null);
  const [friendList,setFriendList] = useState([]);
  const [rooms,setRooms] = useState([]);
  const open = Boolean(anchorEl);
  const openNav = Boolean(anchorElNav);
  const openEdit = Boolean(anchorElEdit);
  const openRoom = Boolean(anchorElRoom);
  const id = open ? 'simple-popover' : undefined;
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleCloseNav = () => {
    setAnchorElNav(null);
  }

  const handleCloseEdit = () => {
    setAnchorElEdit(null);
  }

  const showProfile = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const showEdit = (event) => {
    setAnchorElEdit(event.currentTarget);
  }

  const handleInvitation = () => {
    // let path = '/#/invitation'
    // history.push(path);
    // push method is a bit tricky here, window makes things work
    const origin = window.location.origin;
    window.location.replace(origin + '/#/invitation');
  }
  const handleCreateRoom = (event) => {
    // history.push('/room');
    setAnchorElRoom(event.currentTarget);
  }
  const handleCloseRoom = () => {
    // history.push('/room');
    setAnchorElRoom(null);
  }
  const handleRefresh = () => {
    window.location.reload() ;
    return false;
  }
  // get current user Info
  const getInfo = async() => {
    const sessionInfo = Auth.currentSession();
    const session = await sessionInfo;
    const clientId = session.idToken.payload.sub;
    setCid(clientId);
    // get user name
    const api = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + clientId;
    const response = await fetch(api, {
    method: 'GET'});
    const data = await response.json();
    // name
    setUserName(data['userName']['S']);
    // get avatar
    setAvatar(data['avatar']['S']);
    // get online status
    setUserBio(data['userBio']['S']);
    setFriendList(data['friends']["L"]);
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

  // Launch websocket connection, update user online status
  // Get Amplify ID
  const sessionInfo = Auth.currentSession();
  sessionInfo.then(response => {
      // console.log(response.idToken.payload.sub)
  })
  // console.log("INFO");

  // websocket connection
  let ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initWebsocket = () => {
      ws.addEventListener("open", () => {
        sessionInfo.then(response => {
          ws.send(JSON.stringify({"action": "onMessage", "clientId": response.idToken.payload.sub, "userName": response.accessToken.payload.username}))
        })
      });

      ws.onopen = () => {
          // on connecting, do nothing but log it to the console
          // console.log('connected')
      }

      // ws.onclose = () => {
      //     // console.log('disconnected')
      //     window.alert("Your session is time out!");
      // }
  }

  useEffect(() => {
    // update user online
    initWebsocket()
  }, [initWebsocket])

  useEffect(() => {
    getInfo()
  },[])

  useEffect(() => {
    localStorage.setItem('avatar', avatar);
  }, [avatar])

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName])

  useEffect(() => {
    localStorage.setItem('userBio', userBio);
  }, [userBio])

  useEffect(async()=>{
    if(friendList.length>=0){
      // console.log("aaaaaaa");
      // console.log(friendList);
      friendList.map(async (f)=>{
        // console.log("bbbbbbbbb");
        // console.log(f);
        const api = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + f["S"]
        const response = await fetch(api, {
          method: 'GET'});
        const data = await response.json();
        // console.log(data);
        if(data["Room"]["M"]["roomId"]["S"] !== ""){
          setRooms(rooms=>Array.from(new Set([...rooms,data["Room"]["M"]["roomId"]["S"]])));
        }
        
      })
    }
  },[friendList])

  // update user offline if user leave the page
  window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      sessionInfo.then(response => {
          // console.log(response.idToken.payload.sub)
          ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.accessToken.payload.client_id}))
      })
  })


  return(
    <div>
      <header className="p-3 border-bottom" style={{ boxShadow: '0px 1px 1px #00000024'}}>
        <div className="container">
          {/* <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> */}
            <Box display='flex' flexDirection='row' justifyContent='space-between' style={{ width: '100%'}} >
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img src={logo} style={{paddingRight:'10px'}}></img>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            </ul>     
            <div className="dropdown text-end" style={{ marginTop: '7px' }}>
              <a 
                href="#" 
                className="d-block link-dark text-decoration-none dropdown-toggle" 
                id="dropdownUser1" 
                data-bs-toggle="dropdown" 
                aria-expanded="true"
                onClick={handleClick}>
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

      {/* User Basic Info */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{height: '600px'}}
      >
        <Profile
          profilePic={avatar !== '' ? avatar : demoPic}
          name={userName}
          bio_text={
            <>
              <div style={{fontWeight: 'bold'}}>Your Bio:</div>   
              <br />
              {userBio}
            </>}
          showButton={false}
          // addFriend="+ Add Friend"
          style={{height: 'auto'}}
        />
      </Popover>

      {/* Edit User Info */}
      <Popover
          id='simple-popover'
          open={openEdit}
          anchorEl={anchorElEdit}
          onClose={handleCloseEdit}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{height: '600px'}}
        >
          <UploadCard setAvatar={setAvatar} setUserName={setUserName} setUserBio={setUserBio} />
        </Popover>

        {/* pop up window for join room */}
        <Popover
          id='simple-popover'
          open={openRoom}
          anchorReference={"none"}
          onClose={handleCloseRoom}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          style={{display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', width: '70%vw'}}
        > 
          <div style={{ width: '600px', height: '800px'}}>
            <HomePage cid={cid}/>
          </div>
        </Popover>
      <div className="middlePage">
        <div className="RoomList" style={{marginLeft: '5%', width: 'calc(70%)'}}>
          { rooms.length !== 0 
            ? rooms.map((rid)=>{
                return <RoomCardPage roomid={rid} key={rid}/>
              })
            : <div style={{ textAlign: 'center' }}>
                {/* <div style={{ height: "200px" }}></div> */}
                <img alt='no_room' src={empty} style={{ width: 'calc(45%)' }}/>
                <div style={{ fontWeight: '600', fontSize: '60px' }}>There is no room yet. </div>
                <div style={{ fontWeight: '400', fontSize: '30px' }}>Create a room to get things going.</div>
              </div>
          }
          <img className="plusButton" src={plusButton} alt="plus" onClick={handleCreateRoom} />
        </div>
        <div className="headerdivider"></div>
        <div className="ContactList" style={{marginRight: '3%'}}>
          <div className="col1">People</div>
          <Contacts/>
          <div style={{ marginTop: '10px' }}>
            <Button variant="outlined" color="primary" onClick={handleRefresh}>
              Refresh
            </Button>
        </div>
        </div>
      </div>
    </div>
  )
}


export default RoomListPage;

