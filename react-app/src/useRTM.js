/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import AgoraRTM from 'agora-rtm-sdk'


const useAgoraRtm = (userID,RtmClient) => {
  // fetch db
  const [requests, setRequests] = useState([]);
  const initRtm = async () => {
    await RtmClient.login({uid: userID});
  };
  
  useEffect(() => {
    initRtm();
  }, []);

  useEffect(() => {
    RtmClient.on('MessageFromPeer', (data, peerId) => { // text 为消息文本，peerId 是消息发送方 User ID
        /* 收到点对点消息的处理逻辑 */
        handleMessageRecieved(data,peerId)
    });
  }, []);
  const handleMessageRecieved = async (data, peerId) => {
    console.log(data);
    if (data.messageType === "TEXT") {
      let info = data.text;
      if (info === "friend request");
        let request = peerId;
      setRequests(requests=>[...requests, request]);
    }
  };

  const confirmRequest = (uid)=>{
    setRequests(requests=>[...requests].filter(item=>item!==uid));
  }

  const sendRequest = async(peerID)=>{
    RtmClient.sendMessageToPeer(
        { text: 'friend request' }, // 一个 RtmMessage 实例。
        peerID, // 对端用户的 uid。
      ).then(sendResult => {
        if (sendResult.hasPeerReceived) {
          return "Request Send";
        } else {
          // 你的代码：服务器已收到消息，对端未收到消息。
          return "Request Send but user offline";
        }
      }).catch(error => {
        // 你的代码：点对点消息发送失败。
        return "Request Failed";
      });
  }

  return {sendRequest, confirmRequest, requests};
};
export default useAgoraRtm;