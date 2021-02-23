import { Link } from "react-router-dom";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import diceIcon from '../../Icons/dice_icon.svg';
import React, {useState} from 'react';
const JoinForm = (props)=> {

    const [room,setRoom] = useState("");
    const [name,setName] = useState("");
    const [roomFilled,setRoomFilled] = useState(false);
    const [nameFilled,setNameFilled] = useState(false);
    
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
     
    const updateRoom = (event) => {
        setRoom(event.target.value)
        setRoomFilled(true)
    }

    const updateName = (event) => {
        setName(event.target.value)
        setNameFilled(true)
    }
    
    const handleSubmit = (event)=> {
        // 可删event
        event.preventDefault()
        window.alert("Join Room Success!");
    }
    
    const handleSubmitNothing = (event) => {
        event.preventDefault()
        window.alert("Must fill out all information!");
    }

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
                {
                nameFilled && roomFilled
                // 定义link位置
                ? <Link to="">
                    <Button
                        id="join_room"
                        variant="primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Let's go!
                    </Button>  
                    </Link>
                : <Link to="">
                    <Button
                        id="join_fail"
                        variant="primary"
                        type="submit"
                        onClick={handleSubmitNothing}
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

export default JoinForm;