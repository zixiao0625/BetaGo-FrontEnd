import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import micIconMute from '../../Icons/mic_icon_mute.svg'
import micIconOn from '../../Icons/mic_icon_on.svg'
import camIconOn from '../../Icons/cam_icon_on.svg'
import camIconOff from '../../Icons/cam_icon_off.svg'
import VideoContainer from './VideoContainer.js'
const DeviceSetUp = (props) =>{
    const [camOn,setCamOn] = useState(false);
    const [micOn,setMicOn] = useState(true);

    const clickMicIcon = () => {
        setMicOn(!micOn);
    }

    const clickCamIcon = () => {
        setCamOn(!camOn);
    }
            // if (navigator.mediaDevices.getUserMedia !== null) {
            //     var options = { 
            //       video:this.state.camOn, 
            //       audio:this.state.micOn 
            //     };  
            //     navigator.getUserMedia(options, function(stream) { 
            //     //   this.setState({
            //     //     srcObject: stream,
            //     //     localStream: stream
            //     //   });
            //       this.refs.vidRef.play();
            //     }, function(e) { 
            //       console.log("background error : " + e.name);
            //     }); 
            // }   
    let camIcon = camOn? camIconOn:camIconOff;
    let micIcon = micOn? micIconOn:micIconMute;
    return(
        <div>
        <div className="microphone" onClick = {clickMicIcon}>
            <img src={micIcon}/>
        </div> 
        <div className="camera" onClick = {clickCamIcon}>
            <img src={camIcon}/>
        </div> 
        <div className="videoTest">
            <VideoContainer micOn={micOn} camOn={camOn}/>
        </div>
        </div>
    );
}
export default DeviceSetUp;