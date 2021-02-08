import React, {useState, useEffect, useRef} from 'react';

const VideoContainer = (props)=>{
    const userVideo = useRef()
    const [stream, setStream] = useState();
    // Request User's video and audio stream when compoment loading
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: props.camOn, audio: true }).then(stream => {
            setStream(stream);
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })
    },[props.camOn,props.micOn]);

    // If Stream availiable, push the stream to the video player 
    let UserVideo;
    if (stream) {

        UserVideo = (
            <video className="userVideo" playsInline muted={!props.micOn} ref={userVideo} autoPlay />
        );
    }
    return(
        <div>
            {UserVideo}
        </div>
    );
}
export default VideoContainer;