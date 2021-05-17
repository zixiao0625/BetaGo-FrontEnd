import { useState, useEffect } from 'react'
import "./Contacts.css";
import demoPic from '../../Icons/avatar.jpg'
import Profile from './Profile.js'
import { Popover } from '@material-ui/core';
import UploadCard from "./UploadCard";

const ContactItem = (client_ID, ...props) => {

  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [status, setStatus] = useState('')
  const [userBio, setUserBio] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);

  const getUserInfo = async () => {
      // get user name
      const api = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + client_ID.client_Id
      const response = await fetch(api, {
      method: 'GET'})
      const data = await response.json()
      setUserName(data['userName']['S'])
      data['onlineStatus']['BOOL'] ? setStatus("Online") : setStatus("Offline")
      // get avatar
      setAvatar(data['avatar']['S'])
      // get online status
      setUserBio(data['userBio']['S'])

  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  useEffect(() => {
    getUserInfo()
  })

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <ul className="people">
      <li className="w3-bar" onClick={handleClick} key={userName}>
    
          <span className="join-span"><button className="button">+ Join</button></span>
          {avatar === ''
            ? <img className="picture w3-bar-item w3-circle w3-hide-small" src = {demoPic} alt="contact_list" style={{width: '50px'}}/>
            : <img className="picture w3-bar-item w3-circle w3-hide-small" src = {avatar} alt="contact_list" style={{width: '50px'}}/> }
            
            <div className="w3-bar-item">
              <span className="list-item username"> {userName} </span>
              <span className="list-item status">{status}</span>
            </div>
            </li>
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
            profilePic={avatar}
            name={userName}
            bio_text={
              <>
                <div style={{fontSize:"12px"}}><br />
                {userBio !== '' ? userBio : 'I don\'t have a bio.' }</div>
                
              </>
            }
            addFriend="+ Add Friend"
            showButton={false}
            style={{height: 'auto'}}
          />
        </Popover>
        
      </ul>
    )
}

export default ContactItem