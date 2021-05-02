import React, {useState} from "react";
import "./style.css";
import "./bootstrap.min.css"
import { Box } from "@material-ui/core"
import { Auth } from 'aws-amplify'
import Profile from '../Contacts/Profile.js'
import Contacts from '../Contacts/Contacts.js'
import { Popover } from '@material-ui/core'
import UploadCard from "../Contacts/UploadCard";
require('bootstrap')



//You need this npm package to do createReactClass
const RoomListPage = () => {
  const [pop, setPop] = useState(false)
  const [profile, setProfile] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElEdit, setAnchorElEdit] = useState(null)
  const open = Boolean(anchorEl)
  const openNav = Boolean(anchorElNav)
  const openEdit = Boolean(anchorElEdit)
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleCloseNav = () => {
    setAnchorElNav(null)
  }

  const handleCloseEdit = () => {
    setAnchorElEdit(null)
  }

  const showProfile = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const showEdit = (event) => {
    setAnchorElEdit(event.currentTarget)
  }

  const signOut = () => {
    // Get Amplify ID
    const sessionInfo = Auth.currentSession();
    sessionInfo.then(response => {
        console.log(response.idToken.payload.sub)
    })

    // websocket connection
    const ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
    sessionInfo.then(response => {
        console.log(response.idToken.payload.sub)
        ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.idToken.payload.sub}))
    })
    Auth.signOut()
    window.location = "/"
  }

  return(
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            </ul>     
            <div className="dropdown text-end">
              <a 
                href="#" 
                className="d-block link-dark text-decoration-none dropdown-toggle" 
                id="dropdownUser1" 
                data-bs-toggle="dropdown" 
                aria-expanded="true"
                onClick={handleClick}>
                <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
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
                    <li><a className="dropdown-item" href="#">Invitations</a></li>
                    <li><a className="dropdown-item" href="#" onClick={showProfile}>Profile</a></li>
                    <li><a className="dropdown-item" href="#" onClick={showEdit}>Edit Info</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" onClick={signOut}>Sign out</a></li>
                  </ul>
                </div>
              </Popover>
            </div>
          </div>
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
          profilePic="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/607298fb5ec03fa5072c8f31/img/profile-pic@2x.png"
          name="Nicholas Xu"
          bio_text={
            <>
              Who said I don’t party
              <br />
              UW 21 | Seattle | Shenzhen
              <br />A product guy en route
            </>
          }
          addFriend="+ Add Friend"
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
          <UploadCard />
        </Popover>
      <Contacts />
    </div>
  )
}


export default RoomListPage;

