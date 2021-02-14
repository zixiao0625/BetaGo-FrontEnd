import React, { useState, useEffect,useRef} from "react";
import micIconMute from '../../Icons/mic_icon_mute.svg'
import micIconOn from '../../Icons/mic_icon_on.svg'
import camIconOn from '../../Icons/cam_icon_on.svg'
import camIconOff from '../../Icons/cam_icon_off.svg'

const ToolBar = (props)=>{
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
export default ToolBar;