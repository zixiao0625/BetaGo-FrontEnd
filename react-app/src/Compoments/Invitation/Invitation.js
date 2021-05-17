import './App.css';
import { Link } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from 'react';
import SignOut from '../Login/SignOut.js'
const Invitation = (props)=>{
    return (
        <div>
            <div className="page">
                <header className="App_header"></header>
                <div className="about_container">
                    <h3 id="title">Nicholas invited you to join Hot Hawwaiian Fireside Chat 🔥</h3>
                    <img id="pic" alt="user_selfie" src="data:image/png;base64,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"></img>
                    <div id="form_container">
                    <   JoinForm id="form"></JoinForm>
                    </div>
                </div>   
            </div>
            <div className="device_access">
                <DeviceSetUp></DeviceSetUp>
            </div>
            {/* <div className="btnSignOut">
                <SignOut />
            </div> */}
        </div>
    );
}

class DeviceSetUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          micOn: false,
          camOn: false,
          micIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 20 20">
                   <path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 0 1 5 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"/>
                   </svg>,
          camIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera-video-off" viewBox="0 0 20 20">
                   <path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56l-10-14 .814-.58 10 14-.814.58z"/>
                   </svg>,
          localStream: "",
          srcObject: ""
        };
    
    }

    clickMicIcon = () => {
        if (this.state.micOn) {
            this.setState({
                micIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mic-mute-fill" viewBox="0 0 20 20">
                         <path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 0 1 5 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"/>
                         </svg>,
                micOn: false
            })
        } else {
            this.setState({
                micIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mic" viewBox="0 0 20 20">
                         <path fill-rule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                         <path fill-rule="evenodd" d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
                         </svg>,
                micOn: true
            })
        }
    }

    clickCamIcon = () => {
        if (this.state.camOn) {
            this.setState({
                camIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera-video-off" viewBox="0 0 20 20">
                         <path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56l-10-14 .814-.58 10 14-.814.58z"/>
                         </svg>,
                camOn: false
            })
        
        } else {
            this.setState({
                camIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 20 20 ">
                          <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                          </svg>,
                camOn: true
            })
        
        }
    }


    render() {
        return(
            <div>
            <div className="microphone" onClick = {this.clickMicIcon}>
                {this.state.micIcon}
            </div> 
            <div className="camera" onClick = {this.clickCamIcon}>
                {this.state.camIcon}
            </div> 
            <div className="videoTest">
                <video id="vid" ref="vidRef" src={this.state.srcObject} height="120" width="160" autoplay></video>,
            </div>
            </div>
        );
    }
}

class JoinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    handleSubmit(event) {
        // 可删event
        event.preventDefault()
        window.alert("Join Room Success!");

    }

    render() {
        return (
          <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                {" "}
                <Form.Group controlId="UserName">
                <Form.Label>Join as</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="your name.."
                    maxlength = "30"
                    onChange={(event) => this.updateName(event)}
                />
                </Form.Group>
                <div className="join_btn">
                <Link to="">
                    <Button
                        id="join_room"
                        variant="primary"
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    >
                        Let's go!
                    </Button>  
                </Link> 
                </div>
                </Col>
            </Form.Row>
          </Form>
        );
    }
} 


export default Invitation;