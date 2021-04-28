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
      data['onlineStatus']['BOOL'] ? setStatus("online") : setStatus("offline")

      // get avatar
      // setAvatar('../../Icons/avatar.jpg')

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
      <div className="" key={userName}>
        <div className="each-person" onClick={handleClick}>
          <img className="picture" src = {demoPic} alt="contact_list" style={{position: 'inline'}}/> {userName}
          <span style={{position: 'relative', top: '15px'}}>{status}</span>
          <button className="button">Join</button>
        </div>
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
          <UploadCard />
        </Popover>
      </div>
    )
}

export default ContactItem