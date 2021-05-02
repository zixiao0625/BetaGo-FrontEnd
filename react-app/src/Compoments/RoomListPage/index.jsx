import React, {useState} from "react";
import "./style.css";
import "./bootstrap.min.css"
import { Box } from "@material-ui/core"
import { Auth } from 'aws-amplify'
require('bootstrap')



//You need this npm package to do createReactClass
const RoomListPage = () => {
  const [pop, setPop] = useState(false)

  const handleClick = () => {
    setPop(!pop)
  }

  const signOut = () => {
    // Get Amplify ID
    const sessionInfo = Auth.currentSession();
    sessionInfo.then(response => {
        console.log(response.idToken.payload.sub)
    })

    // websocket connection
    const ws = new WebSocket('wss://9iqx51uhcj.execute-api.us-east-1.amazonaws.com/dev')
    sessionInfo.then(response => {
        console.log(response.idToken.payload.sub)
        ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.idToken.payload.sub}))
    })
    Auth.signOut()
    window.location = "/"
  }
  
  return(
    <div>
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            {/* <li><a href="#" className="nav-link px-2 link-dark">Invitations</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Notification</a></li> */}
          </ul>
          
          <div className="dropdown text-end">
            <a 
              href="#" 
              className="d-block link-dark text-decoration-none dropdown-toggle" 
              id="dropdownUser1" 
              data-bs-toggle="dropdown" 
              aria-expanded="true"
              onClick={handleClick}>
              <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            {/* <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{}} data-bs-toggle="dropdown">
              <li><a className="dropdown-item" href="#">Notification</a></li>
              <li><a className="dropdown-item" href="#">Invitations</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </header>
    {pop 
      ? <Box borderColor='black' borderRadius="borderRadius">
        <ul style={{ width: '93px', marginLeft: '82%' }}>
          <li><a className="dropdown-item" href="#">Notification</a></li>
          <li><a className="dropdown-item" href="#">Invitations</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#" onClick={signOut}>Sign out</a></li>
        </ul>
        </Box>
      : null}
    </div>
  )
}


export default RoomListPage;

