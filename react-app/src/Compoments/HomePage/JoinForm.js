import { Link } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import diceIcon from '../../Icons/dice_icon.svg';
import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Auth } from 'aws-amplify';
const rootApi = "https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/room";
const JoinForm = (props)=> {

    const [room,setRoom] = useState("");
    const [info,setInfo] = useState("");
    const [roomId, setRoomID] = useState("");
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
    const UpdateRoomDB = () => {
        
    }

    const updateRoom = (event) => {
        setRoom(event.target.value)
    }

    const updateInfo = (event) => {
        setInfo(event.target.value)
    }
    
    const handleSubmit = async(event)=> {
        const sessionInfo = Auth.currentSession();
        const session = await sessionInfo
        const clientId = session.idToken.payload.sub
        // 可删event
        let id = uuidv4();
        const data = {};
        data["roomID"]=id;
        data["roomName"] = room;
        data["roomInfo"] =info;
        data["host"] = clientId;
        data["members"] = [clientId];

        fetch(rootApi, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data === "Update!"){
                console.log("succeed!");
                // props.p.history.push(`/room/${id}`);
            }
            
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
        
    }

    
    const handleSubmitNothing = (event) => {
        event.preventDefault()
        window.alert("Must fill out all information!");
    }

    const onsubmit =  room !== "" && info !== "" ? handleSubmit : handleSubmitNothing;

    return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                {" "}
                <Form.Group controlId="RoomName">
                <Form.Label>Give it a name</Form.Label>
                <i className="dice_icon">
                    <img src={diceIcon}/>
                </i>
                <Form.Control
                    type="text"
                    placeholder="eg: Odegaarrd Night.."
                    maxLength = "30"
                    onChange={updateRoom}
                />
                </Form.Group>
                <Form.Group controlId="UserName">
                <Form.Label>Make some description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Let's make a study group"
                    maxLength = "50"
                    onChange={updateInfo}
                />
                </Form.Group>
                <div className="join_btn">
                
                <Button
                    id="join_room"
                    variant="primary"
                    type="submit"
                    onClick={onsubmit}
                >
                    Let's go!
                </Button>  
                </div>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default JoinForm;