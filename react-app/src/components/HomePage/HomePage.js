import './App.css';
import { Link } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React from 'react';
const HomePage = (props)=>{
    return (
        <div>
            <div className="page">
                <header className="App_header"></header>
                <div className="about_container">
                    <h1 id="title">Host a party 🔥</h1>
                    <JoinForm></JoinForm>
                </div>   
            </div>
            <div className="device_access">
                <DeviceSetUp></DeviceSetUp>
            </div>
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
            // this.refs.viRef.pause();
            // this.video.src = "";
            // this.state.localstream.getTracks().forEach(x=>x.stop())
        } else {
            this.setState({
                camIcon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 20 20 ">
                          <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                          </svg>,
                camOn: true
            })
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
          room: "",
          name: "",
          roomFilled: false,
          nameFilled: false
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //   handleChange(event) {
    //     this.setState({ 
    //       value: event.target.value
    //     });
    //     if (event.target.value !== "") {
    //       this.setState({ 
    //         clickAble: true
    //       });
    //     } else if (event.target.value === "") {
    //       this.setState({ 
    //         clickAble: false
    //       });
    //     }
    //   }
     
    updateRoom = (event) => {
        this.setState({
            room: event.target.value,
            roomFilled: true
        })
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value,
            nameFilled: true
        })
    }
    
    handleSubmit(event) {
        // 可删event
        event.preventDefault()
        window.alert("Join Room Success!");

    }
    
    handleSubmitNothing(event) {
        event.preventDefault()
        window.alert("Must fill out all information!");
    }

    render() {
        return (
          <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                {" "}
                <Form.Group controlId="RoomName">
                <Form.Label>Give it a name</Form.Label>
                <i className="dice_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
                    <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                    <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </i>
                <Form.Control
                    type="text"
                    placeholder="eg: Odegaarrd Night.."
                    maxlength = "30"
                    onChange={(event) => this.updateRoom(event)}
                />
                </Form.Group>
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
                {
                this.state.nameFilled && this.state.roomFilled
                // 定义link位置
                ? <Link to="">
                    <Button
                        id="join_room"
                        variant="primary"
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    >
                        Let's go!
                    </Button>  
                    </Link>
                : <Link to="">
                    <Button
                        id="join_fail"
                        variant="primary"
                        type="submit"
                        onClick={(event) => this.handleSubmitNothing(event)}
                    >
                        Let's go!
                    </Button>  
                    </Link>
                
                }
                </div>
                </Col>
            </Form.Row>
          </Form>
        );
    }
} 


export default HomePage;