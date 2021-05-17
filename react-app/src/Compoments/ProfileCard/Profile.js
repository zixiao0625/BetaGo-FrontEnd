import React from 'react';
import "./Profile.css";

function App() {
  return (
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
      statsProps={ProfileData.statsProps}
    />
  );
}

export default App;

function Profile(props) {
  const { profilePic, name, bio_text, addFriend} = props;

  return (
    <div className="profile">
      <div className="name-card">
        <img className="profile-pic" src={profilePic} />
        <div className="name pingfangtc-medium-black-14px">{name}</div>
      </div>
      <p className="biotext pingfangtc-regular-normal-black-8px">{bio_text}</p>

        <div className="overlap-group">
            <div className="addFriend pingfangtc-medium-apple-10px">{addFriend}</div>
        </div>

    </div>
  );
}





const ProfileData = {
    profilePic: "https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/607298fb5ec03fa5072c8f31/img/profile-pic@2x.png",
    name: "Nicholas Xu",
    text44: <>Who said I don’t party<br />UW 21 | Seattle | Shenzhen<br />A product guy en route</>,
    text47: "+ Add Friend",

};

