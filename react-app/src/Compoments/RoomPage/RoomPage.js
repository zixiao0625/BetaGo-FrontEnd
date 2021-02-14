import React, { useState, useEffect,useRef} from "react";
import VideoGalley from "./VideoGalley.js";
import ToolBar from "./ToolBar.js"
const RoomPage = (props)=>{
    return (
    <div>
        <div>
            <VideoGalley/>
        </div>
        <div>
            <ToolBar/>
        </div>
    </div>
    );
}
export default RoomPage;