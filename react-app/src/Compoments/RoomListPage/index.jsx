import React from "react";
import "./style.css";
import "./bootstrap.min.css"
require('bootstrap')



//You need this npm package to do createReactClass
class RoomListPage extends React.Component{
  render() {
    return(
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
              <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
                <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{}} data-bs-toggle="dropdown">
                <li><a className="dropdown-item" href="#">Notification</a></li>
                <li><a className="dropdown-item" href="#">Invitations</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}


export default RoomListPage;

