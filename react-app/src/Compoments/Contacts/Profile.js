import React from 'react';
import "./Profile.css";
import { Button } from "react-bootstrap";

function Profile(props) {
    const { profilePic, name, bio_text, addFriend} = props;
  
    return (
      <div className="profile" style={{height: 'auto'}}>
        <div className="name-card">
          <img className="profile-pic" src={profilePic} alt="avatar" />
          <div className="name pingfangtc-medium-black-14px">{name}</div>
        </div>
        <p className="biotext pingfangtc-regular-normal-black-8px">{bio_text}</p>
  
          <div className="overlap-group">
              <div className="addFriend pingfangtc-medium-apple-10px">
                <Button>{addFriend}</Button>
              </div>
          </div>
  
      </div>
    );
  }

  export default Profile