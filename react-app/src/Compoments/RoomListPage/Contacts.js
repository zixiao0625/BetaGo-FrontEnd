import React from "react";
// import "./Contacts.css";
import demoPic from '../../Icons/avatar.jpg'
import { Auth } from 'aws-amplify';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendId: [],
      userNameList: [],
      clientId: ""
    }
  }
  // const contacts ="Contacts"
  // const group19 ="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-19@2x.svg"
  // const group16="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-16@2x.svg"
  // const group17="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-17@2x.svg"
  // const group18="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-18@2x.svg"
  
  sleep = async (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  getFriendId = async () => {
    const sessionInfo = Auth.currentSession();
    const origin = window.location.origin
    // get each friend's clientId
    // sessionInfo.then(response => {
    //   // get current client ID
    //   const clientId = response.idToken.payload.sub
    //   this.setState({ clientId: clientId})
    //   // define api to get friend list
    //   const url = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + clientId
    //   return fetch(url, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json',
    //               'origin': origin
    //             }
    //   }).then((response) => {
    //     return response.json().then((data) => {
    //     const length = data['friends']['L'].length
    //     if (length !== 0) {
    //       var targetList = this.state.friendId
    //       data['friends']['L'].forEach(function(item){
    //         targetList.push(item['S'])
    //       }) 
    //       this.setState({ friendId: targetList })
    //     }
    //     })
    //   })
    // })
    const session = await sessionInfo
    const clientId = session.idToken.payload.sub
    this.setState({ clientId: clientId})
    const url = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + clientId
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
                'origin': origin
               }
    })
    const data = await response.json()
    const length = data['friends']['L'].length
    if (length !== 0) {
      var targetList = this.state.friendId
      data['friends']['L'].forEach(function(item){
        targetList.push(item['S'])
      }) 
      this.setState({ friendId: targetList })
    }
  }

 getUserNames = async () => {

  // wait for fetch the friend list
  await this.getFriendId()
  console.log(this.state.friendId)
  console.log(this.state.userNameList)
  // fetch user name of each clientId
  if (this.state.friendId.length !== 0) {
    let userNames = this.state.userNameList
    let friends = this.state.friendId
    for (let index = 0; index < friends.length; index++) {
      const api = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + friends[index]
      // fetch(api, {
      //   method: 'GET',
      //   headers: { 'Content-Type': 'application/json',
      //               'origin': origin
      //             }
      // }).then((response) => {
      //   console.log("reaching 1111")
      //   response.json().then((data) => {
      //   console.log("reaching222")
      //   var userName = data['userName']['S']
      //   userNames.push(userName)
      //   })
      // })
      const response = await fetch(api, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
                    'origin': origin
                 }
      }) 
      const data = await response.json()
      var userName = data['userName']['S']
      userNames.push(userName)
    }
    this.setState({userNameList: userNames})
  }
 }

  componentDidMount = async () => {
    await this.getUserNames()
    console.log(this.state.friendId)
    console.log(this.state.userNameList)
  }
  
  render = () => {
    let userNameList = this.state.userNameList
    return userNameList.length === 0 ? <div>
                                    <div className="boxContainer">
                                      <div className="contacts pingfangtc-medium-black-20px">Contacts
                                      </div>
                                    </div>
                                  </div> : (
      <div className="boxContainer">
        <div className="contacts pingfangtc-medium-black-20px">Contacts
        </div>
        {/* <div className="person_list">
          <div className="each-person">
            <img className="picture" src = {demoPic} />Nicholas Xu
            <button className="button">Join</button>
          </div>
        </div>
        <div className="person_list">
          <div className="each-person">
            <img className="picture" src = {demoPic} />Zixao Huang
            <button className="button">Join</button>
          </div>
        </div>
        <div className="person_list">
          <div className="each-person">
            <img className="picture" src = {demoPic} />Vanessa
            <button className="button">Join</button>
          </div>
        </div> */}
        {
          this.state.userNameList.map((userName) => {
            return (
              <div className="" key={userName}>
                <div className="each-person">
                  <img className="picture" src = {demoPic} alt="contact_list" />{userName}
                  <button className="button">Join</button>
                </div>
              </div>
            )
          })
        }
        
      </div>
    );
  }

}

export default Contacts