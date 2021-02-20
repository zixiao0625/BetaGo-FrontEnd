import { Link } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import diceIcon from '../../Icons/dice_icon.svg';
import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
const JoinForm = (props)=> {

    const [room,setRoom] = useState("");
    const [name,setName] = useState("");
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

    const updateName = (event) => {
        setName(event.target.value)
    }
    
    const handleSubmit = (event)=> {
        // 可删event
        let id = uuidv4();
        props.p.history.push(`/room/${id}`);
    }
    
    const handleSubmitNothing = (event) => {
        event.preventDefault()
        window.alert("Must fill out all information!");
    }

    const onsubmit =  room !== "" && name !== "" ? handleSubmit : handleSubmitNothing;

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
                <Form.Label>Join as</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="your name.."
                    maxLength = "30"
                    onChange={updateName}
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