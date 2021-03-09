import React from "react";
import "./style.css";

function RoomListPage() {
  return <RoomList {...RoomListData} />;
}

export default RoomListPage;


function RoomList(props) {
  const {
    brandname,
    roomicon,
    rooms,
    globeicon,
    people,
    helpicon,
    help,
    avatar,
    name,
    icons8EmailSend961,
    icons8Notification901,
    notification,
    more1,
    rooms2,
    divider,
    contacts,
    name2,
    online,
    zixiaoHuang,
    status,
    name3,
    roomName,
    profilepic,
    name4,
    time,
    overlapGroup6,
    x1,
    col2Props,
    col22Props,
    overlapgroup5Props,
    group63Props,
    overlapgroup52Props,
    group632Props,
    overlapgroup53Props,
    group633Props,
    statusonlineProps,
    group634Props,
  } = props;

  return (
    <div className="room-list">
      <div className="nav">
        <h1 className="brand-name pingfangtc-medium-black-25px">{brandname}</h1>
        <div className="navigation">
          <div className="rooms">
            <img className="x-icon" src={roomicon} />
            <div className="rooms-1 valign-text-middle sfprodisplay-regular-normal-baltic-sea-18px">{rooms}</div>
          </div>
          <div className="people">
            <img className="x-icon" src={globeicon} />
            <div className="people-1 valign-text-middle sfprodisplay-medium-gray-chateau-16px">{people}</div>
          </div>
          <div className="help">
            <img className="x-icon" src={helpicon} />
            <div className="help-1 valign-text-middle sfprodisplay-regular-normal-gray-chateau-18px">{help}</div>
          </div>
        </div>
        <div className="user">
          <div className="personal-btn">
            <img className="avatar" src={avatar} />
            <div className="name">{name}</div>
          </div>
          <div className="more-btn">
            <div className="overlap-group2">
              <div className="invite">
                <img className="icons8-" src={icons8EmailSend961} />
              </div>
              <div className="overlap-group1">
                <div className="group-77">
                  <img className="icons8-" src={icons8Notification901} />
                </div>
                <img className="notification" src={notification} />
              </div>
            </div>
            <div className="more-btn-1">
              <img className="more-1" src={more1} />
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-group">
        <div className="main">
          <div className="left">
            <div className="rooms-2 pingfangtc-medium-black-25px">{rooms2}</div>
            <div className="room-cards">
              <Col2 x1stProps={col2Props.x1stProps} x1st2Props={col2Props.x1st2Props} />
              <Col2 x1stProps={col22Props.x1stProps} x1st2Props={col22Props.x1st2Props} className="col1" />
            </div>
          </div>
          <img className="divider" src={divider} />
          <div className="right">
            <div className="contacts pingfangtc-medium-black-25px">{contacts}</div>
            <div className="list border-class-1">
              <div className="contact">
                <Overlapgroup5
                  profilepic={overlapgroup5Props.profilepic}
                  statusonlineProps={overlapgroup5Props.statusonlineProps}
                />
                <div className="auto-flex">
                  <div className="name-5 pingfangtc-medium-black-10px nowrap">{name2}</div>
                  <div className="online pingfangtc-medium-concord-8px">{online}</div>
                </div>
                <Group63 Join={group63Props.Join} />
              </div>
              <div className="contact2">
                <Overlapgroup5
                  profilepic={overlapgroup52Props.profilepic}
                  statusonlineProps={overlapgroup52Props.statusonlineProps}
                />
                <div className="auto-flex1">
                  <div className="zixiao-huang pingfangtc-medium-black-10px nowrap">{zixiaoHuang}</div>
                  <div className="status pingfangtc-medium-concord-8px">{status}</div>
                </div>
                <Group63 Join={group632Props.Join} className="group-63-1" />
              </div>
              <div className="contact">
                <Overlapgroup5
                  profilepic={overlapgroup53Props.profilepic}
                  statusonlineProps={overlapgroup53Props.statusonlineProps}
                />
                <div className="auto-flex2">
                  <div className="name-6 pingfangtc-medium-black-10px nowrap">{name3}</div>
                  <div className="room-name pingfangtc-medium-concord-8px">{roomName}</div>
                </div>
                <Group63 Join={group633Props.Join} className="group-63-2" />
              </div>
              <div className="contact4">
                <div className="overlap-group1-1">
                  <img className="profile-pic" src={profilepic} />
                  <Statusonline
                    statusOnline={statusonlineProps.statusOnline}
                    ellipse17={statusonlineProps.ellipse17}
                    className="status-offline"
                  />
                </div>
                <div className="auto-flex3">
                  <div className="name-7 pingfangtc-medium-black-10px nowrap">{name4}</div>
                  <div className="time pingfangtc-medium-concord-8px">{time}</div>
                </div>
                <Group63 Join={group634Props.Join} className="group-63-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="new-room-btn">
          <div className="overlap-group6" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <img className="x1" src={x1} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Col2(props) {
  const { x1stProps, x1st2Props, className } = props;

  return (
    <div className={`col2 ${className || ""}`}>
      <X1st {...x1stProps} />
      <X1st {...x1st2Props} className="x2nd" />
    </div>
  );
}


function X1st(props) {
  const {
    partying,
    icons8Party301,
    text1,
    name,
    vanessaaaay,
    sky,
    name2,
    name3,
    name4,
    nixYang,
    nixYang2,
    qianwenJia,
    icons8User301,
    text2,
    text3,
    row1Props,
    row12Props,
    className,
  } = props;

  return (
    <div className={`x1st ${className || ""}`}>
      <div className="title">
        <div className="partying-1">
          <div className="partying play-normal-black-8px">{partying}</div>
          <img className="icons8--1" src={icons8Party301} />
        </div>
        <div className="text- pingfangtc-medium-black-10px">{text1}</div>
      </div>
      <div className="middle">
        <div className="room-avatars">
          <Row1
            group16={row1Props.group16}
            group17={row1Props.group17}
            group18={row1Props.group18}
            group19={row1Props.group19}
          />
          <Row1
            group16={row12Props.group16}
            group17={row12Props.group17}
            group18={row12Props.group18}
            group19={row12Props.group19}
            className="row2"
          />
        </div>
        <div className="name-list">
          <div className="name-1 pingfangtc-medium-black-10px">{name}</div>
          <div className="vanessaaaay pingfangtc-medium-black-10px">{vanessaaaay}</div>
          <div className="sky pingfangtc-medium-black-10px">{sky}</div>
          <div className="name-2 pingfangtc-medium-black-10px">{name2}</div>
          <div className="name-3 pingfangtc-medium-black-10px">{name3}</div>
          <div className="name-4 pingfangtc-medium-black-10px">{name4}</div>
          <div className="nix-yang pingfangtc-medium-black-10px">{nixYang}</div>
          <div className="nix-yang pingfangtc-medium-black-10px">{nixYang2}</div>
          <div className="qianwen-jia pingfangtc-medium-black-10px">{qianwenJia}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="room-people">
          <img className="icons8--1" src={icons8User301} />
          <div className="text--1 pingfangtc-medium-granite-gray-8px">{text2}</div>
        </div>
        <div className="text--2 pingfangtc-regular-normal-black-15px">{text3}</div>
      </div>
    </div>
  );
}


function Row1(props) {
  const { group16, group17, group18, group19, className } = props;

  return (
    <div className={`row1 ${className || ""}`}>
      <img className="group-16" src={group16} />
      <img className="group-1" src={group17} />
      <img className="group-1" src={group18} />
      <img className="group-1" src={group19} />
    </div>
  );
}


function Overlapgroup5(props) {
  const { profilepic, statusonlineProps } = props;

  return (
    <div className="overlap-group5">
      <img className="profile-pic" src={profilepic} />
      <Statusonline statusOnline={statusonlineProps.statusOnline} ellipse17={statusonlineProps.ellipse17} />
    </div>
  );
}


function Statusonline(props) {
  const { statusOnline, ellipse17, className } = props;

  return (
    <div className={`status-online ${className || ""}`} style={{ backgroundImage: `url(${statusOnline})` }}>
      <img className="ellipse-17" src={ellipse17} />
    </div>
  );
}


function Group63(props) {
  const { Join, className } = props;

  return (
    <div className={`group-63 ${className || ""}`}>
      <div className="overlap-group-1">
        <div className="x-join pingfangtc-normal-apple-8px">{Join}</div>
      </div>
    </div>
  );
}
const row1Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-16@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-17@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-18@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-19@2x.png",
};

const row12Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-16-1@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-17-1@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-18-1@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-19-2@2x.png",
};

const x1stData = {
    partying: "PARTYING",
    icons8Party301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-party-30--1-@2x.png",
    text1: "UW小圆桌😈国内Clubhouse的模范着锦旗纷纷停止内侧，你用过了几个？分享你的看法",
    name: "Jesus 📷",
    vanessaaaay: "vanessaaaay 📷",
    sky: "sky 📷",
    name2: "Nicholas Xu 📷",
    name3: "Lance Zhong 📷",
    name4: "Kelly Zhang 💬",
    nixYang: "Nix Yang 💬",
    nixYang2: "Nix Yang 💬",
    qianwenJia: "Qianwen Jia 💬",
    icons8User301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-user-30-1@2x.png",
    text2: "8/8",
    text3: "🔒",
    row1Props: row1Data,
    row12Props: row12Data,
};

const row13Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-16@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-17@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-18@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-19@2x.png",
};

const row14Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-16-1@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-17-1@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-18-1@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-19-2@2x.png",
};

const x1st2Data = {
    partying: "PARTYING",
    icons8Party301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-party-30--1-@2x.png",
    text1: "UW小圆桌😈国内Clubhouse的模范着锦旗纷纷停止内侧，你用过了几个？分享你的看法",
    name: "Jesus 📷",
    vanessaaaay: "vanessaaaay 📷",
    sky: "sky 📷",
    name2: "Nicholas Xu 📷",
    name3: "Lance Zhong 📷",
    name4: "Kelly Zhang 💬",
    nixYang: "Nix Yang 💬",
    nixYang2: "Nix Yang 💬",
    qianwenJia: "Qianwen Jia 💬",
    icons8User301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-user-30-1@2x.png",
    text2: "8/8",
    text3: "🔒",
    row1Props: row13Data,
    row12Props: row14Data,
};

const col2Data = {
    x1stProps: x1stData,
    x1st2Props: x1st2Data,
};

const row15Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-16@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-17@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-18@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-19-4@2x.png",
};

const row16Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-16-1@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-17-1@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-18-1@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-19-2@2x.png",
};

const x1st3Data = {
    partying: "PARTYING",
    icons8Party301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-party-30--1-@2x.png",
    text1: "UW小圆桌😈国内Clubhouse的模范着锦旗纷纷停止内侧，你用过了几个？分享你的看法",
    name: "Jesus 📷",
    vanessaaaay: "vanessaaaay 📷",
    sky: "sky 📷",
    name2: "Nicholas Xu 📷",
    name3: "Lance Zhong 📷",
    name4: "Kelly Zhang 💬",
    nixYang: "Nix Yang 💬",
    nixYang2: "Nix Yang 💬",
    qianwenJia: "Qianwen Jia 💬",
    icons8User301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-user-30-1@2x.png",
    text2: "8/8",
    text3: "🔒",
    row1Props: row15Data,
    row12Props: row16Data,
};

const row17Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-16@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-17@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-18@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-19-4@2x.png",
};

const row18Data = {
    group16: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-16-1@2x.png",
    group17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-17-1@2x.png",
    group18: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-18-1@2x.png",
    group19: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-19-2@2x.png",
};

const x1st4Data = {
    partying: "PARTYING",
    icons8Party301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-party-30--1-@2x.png",
    text1: "UW小圆桌😈国内Clubhouse的模范着锦旗纷纷停止内侧，你用过了几个？分享你的看法",
    name: "Jesus 📷",
    vanessaaaay: "vanessaaaay 📷",
    sky: "sky 📷",
    name2: "Nicholas Xu 📷",
    name3: "Lance Zhong 📷",
    name4: "Kelly Zhang 💬",
    nixYang: "Nix Yang 💬",
    nixYang2: "Nix Yang 💬",
    qianwenJia: "Qianwen Jia 💬",
    icons8User301: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/icons8-user-30-1@2x.png",
    text2: "8/8",
    text3: "🔒",
    row1Props: row17Data,
    row12Props: row18Data,
};

const col22Data = {
    x1stProps: x1st3Data,
    x1st2Props: x1st4Data,
};

const statusonlineData = {
    statusOnline: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-16@2x.png",
    ellipse17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-17@2x.png",
};

const overlapgroup5Data = {
    profilepic: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/group-19@2x.png",
    statusonlineProps: statusonlineData,
};

const group63Data = {
    Join: "+ Join",
};

const statusonline2Data = {
    statusOnline: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-16@2x.png",
    ellipse17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-17@2x.png",
};

const overlapgroup52Data = {
    profilepic: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-16@2x.png",
    statusonlineProps: statusonline2Data,
};

const group632Data = {
    Join: "+ Join",
};

const statusonline3Data = {
    statusOnline: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-16@2x.png",
    ellipse17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-17@2x.png",
};

const overlapgroup53Data = {
    profilepic: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-17@2x.png",
    statusonlineProps: statusonline3Data,
};

const group633Data = {
    Join: "+ Join",
};

const statusonline4Data = {
    statusOnline: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-16@2x.png",
    ellipse17: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/ellipse-17-3@2x.png",
};

const group634Data = {
    Join: "+ Join",
};

const RoomListData = {
    brandname: "BrandName",
    roomicon: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/roomicon@2x.png",
    rooms: "Rooms",
    globeicon: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/globeicon@2x.png",
    people: "People",
    helpicon: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/helpicon@2x.png",
    help: "Help",
    avatar: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/avatar@2x.png",
    name: "Nicholas Xu",
    icons8EmailSend961: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/icons8-email-send-96-1@2x.png",
    icons8Notification901: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/icons8-notification-90-1@2x.png",
    notification: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1b8f44d358a62946477f/img/notification@2x.png",
    more1: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1b8f44d358a62946477f/img/more-1@2x.png",
    rooms2: "Rooms",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/divider@1x.png",
    contacts: "Contacts",
    name2: "Nicholas Xu",
    online: "Online",
    zixiaoHuang: "Zixiao Huang",
    status: "Partying",
    name3: "vanessaaaay",
    roomName: "UW小圆桌😈国内Clubhouse...",
    profilepic: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/603d1492f59279099b05ed88/img/group-18@2x.png",
    name4: "sky",
    time: "41m",
    overlapGroup6: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/ellipse-18@2x.png",
    x1: "https://anima-uploads.s3.amazonaws.com/projects/60363237048e519c5d8f0bb8/releases/60452b21ab9a31396a53ae8d/img/--1@2x.png",
    col2Props: col2Data,
    col22Props: col22Data,
    overlapgroup5Props: overlapgroup5Data,
    group63Props: group63Data,
    overlapgroup52Props: overlapgroup52Data,
    group632Props: group632Data,
    overlapgroup53Props: overlapgroup53Data,
    group633Props: group633Data,
    statusonlineProps: statusonline4Data,
    group634Props: group634Data,
};

