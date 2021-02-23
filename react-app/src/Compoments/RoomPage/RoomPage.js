import SignOut from '../Login/SignOut.js'
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
        <div className="btnSignOut">
            <SignOut />  
        </div>
    </div>
    );
}
export default RoomPage;