import React, { useState, useEffect,useRef} from "react";
import './App.css';
import micIconMute from '../../Icons/mic_icon_mute.svg'
import micIconOn from '../../Icons/mic_icon_on.svg'
import camIconOn from '../../Icons/cam_icon_on.svg'
import camIconOff from '../../Icons/cam_icon_off.svg'
import music from '../../Icons/music.svg'
import chat from '../../Icons/chat.svg'
import box from '../../Icons/box.svg'
import left from '../../Icons/left.svg'
import right from '../../Icons/right.svg'


const ToolBar = (props)=>{
    const [camOn,setCamOn] = useState(false);
    const [micOn,setMicOn] = useState(true);
    const [showMusic,setMusicIcon] = useState(true);
    const [showBox,setBoxIcon] = useState(true);
    const [showChat,setChatIcon] = useState(true);
    const [showLeft,setLeftIcon] = useState(true);
    const [showRight,setRightIcon] = useState(false);

    
    const clickMicIcon = () => {
        setMicOn(!micOn);
    }

    const clickCamIcon = () => {
        setCamOn(!camOn);
    }

    const clickMusicIcon = (event) => {
        event.preventDefault()
        window.alert("You have clicked Music icon!");
    }

    const clickBoxIcon = (event) => {
        event.preventDefault()
        window.alert("You have clicked Box icon");
    }

    const clickChatIcon = (event) => {
        event.preventDefault()
        window.alert("You have clicked Chat icon");
    }

    const clickLeftIcon = () => {
        setBoxIcon(false);
        setChatIcon(false);
        setMusicIcon(false);
        setLeftIcon(false);
        setRightIcon(true);
    }

    const clickRightIcon = () => {
        setBoxIcon(true);
        setChatIcon(true);
        setMusicIcon(true);
        setLeftIcon(true);
        setRightIcon(false);
    }

    let camIcon = camOn? camIconOn:camIconOff;
    let micIcon = micOn? micIconOn:micIconMute;
    return (
    <div className="toolbar">
        <div className="microphone" onClick = {clickMicIcon}>
            <img src={micIcon} alt="microphone icon"/>
        </div> 
        <div className="camera" onClick = {clickCamIcon}>
            <img src={camIcon} alt="camera icon"/>
        </div>
        <div className="music" onClick = {clickMusicIcon}>
            {showMusic? <img src={music} alt="music icon"/>: null}
        </div> 
        <div className="box" onClick = {clickBoxIcon}>
            {showBox? <img src={box} alt="box icon"/>: null}
        </div>
        <div className="chat" onClick = {clickChatIcon}>
            {showChat? <img src={chat} alt="chat icon"/>: null}
        </div>
        <div className="left" onClick = {clickLeftIcon}>
            {showLeft? <img src={left} alt="left arrow icon"/>: null}
        </div>
        <div className="right" onClick = {clickRightIcon}>
            {showRight? <img src={right} alt="right arrow icon"/>: null}
        </div>
    </div>
    );
}
export default ToolBar;