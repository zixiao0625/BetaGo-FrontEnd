import React, { useState, useEffect,useRef} from "react";

const VideoGalley = (props)=>{
    return(<VideoContainer/>);
}


const VideoContainer = (props)=>{
    const userVideo = useRef()
    const [stream, setStream] = useState();
    // Request User's video and audio stream when compoment loading
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setStream(stream);
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })
    }, []);

    // If Stream availiable, push the stream to the video player 
    let UserVideo;
    if (stream) {
        UserVideo = (
            <video className="userVideo" playsInline muted ref={userVideo} autoPlay />
        );
    }
    return(
        <div>
            {UserVideo}
        </div>
    );
}

export default VideoGalley;