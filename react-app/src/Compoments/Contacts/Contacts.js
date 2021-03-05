import React from "react";
import "./style.css";


function Contacts(props) {
  const contacts ="Contacts"
  const group19 ="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-19@2x.svg"
  const group16="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-16@2x.svg"
  const group17="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-17@2x.svg"
  const group18="https://anima-uploads.s3.amazonaws.com/projects/603f96b6a6fa0860cddc1b17/releases/603f97ca8010ac957ab858ff/img/group-18@2x.svg"
  

  return (
    <div className="box">
      <div className="contacts pingfangtc-medium-black-20px">{contacts}
      </div>
      <div className="person_list">
        <div className="each-person">
          <img className="picture" src = {group19} />Nicholas Xu
          <button class="button">Join</button>
        </div>

      <div className="person_list">
        <div className="each-person">
          <img className="picture" src = {group16} />Zixao Huang
          <button class="button">Join</button>
        </div>
      </div>

      <div className="person_list">
        <div className="each-person">
          <img className="picture" src = {group17} />Vanessa
          <button class="button">Join</button>
        </div>
      </div>
        
      </div>
    </div>
  );

  
  // return (
  //   <div className="group-60">
  //     <div className="group-60-item pingfangtc-medium-black-10px">{"zixiaoHuang"}</div>
  //     <div className="group-60-item pingfangtc-medium-black-10px">{"vanessaaaay"}</div>
  //     <div className="group-60-item pingfangtc-medium-black-10px">{"sky"}</div>
  //   </div>
  // );

}

export default Contacts