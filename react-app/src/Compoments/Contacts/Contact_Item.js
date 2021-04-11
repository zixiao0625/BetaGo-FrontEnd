import { useState, useEffect } from 'react'
import "./Contacts.css";
import demoPic from '../../Icons/avatar.jpg'

const ContactItem = (client_ID, ...props) => {

  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [status, setStatus] = useState('')
  const [userBio, setUserBio] = useState('')

  const getUserInfo = async () => {
      // get user name
      const api = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + client_ID.client_Id
      const response = await fetch(api, {
      method: 'GET'})
      const data = await response.json()
      setUserName(data['userName']['S'])
      data['onlineStatus']['BOOL'] ? setStatus("online") : setStatus("offline")

      // get avatar
      // setAvatar('../../Icons/avatar.jpg')

      // get online status
      setUserBio(data['userBio']['S'])

  }

  // const userName = getUserInfo()['userName']['S']
  useEffect(() => {
    getUserInfo()
  })

  return (
      <div className="" key={userName}>
        <div className="each-person">
          <img className="picture" src = {demoPic} alt="contact_list" style={{position: 'inline'}}/> {userName}
          <span style={{position: 'relative', top: '15px'}}>{status}</span>
          <button className="button">Join</button>
        </div>
      </div>
    )
}

export default ContactItem