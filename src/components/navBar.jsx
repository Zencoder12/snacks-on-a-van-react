import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = ({ user }) => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink id="nav-title" className="nav-link active" aria-current="page" to="/">LOCATION:---</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink id="nav-title" className="nav-link" to="/menu">MENU</NavLink>
            </li>
            <li className="nav-item">
              <NavLink id="nav-title" className="nav-link" to="/orders">ODERS</NavLink>
            </li>
            {!user && <li className="nav-item">
              <NavLink id="nav-title" className="nav-link" to="/login">LOGIN/REGISTER</NavLink>
            </li>}
            {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink id="nav-title" className="nav-link" to="/login">{'HI! ' + user.firstName.toUpperCase()}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink id="nav-title" className="nav-link" to="/logout">LOGOUT</NavLink>
              </li>
            </React.Fragment>)
            }
          </ul>
        </div>
      </div>
  </nav>
     );
}
 
export default NavBar;