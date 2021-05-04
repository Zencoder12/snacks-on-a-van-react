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
            <li className="nav-item">
              <NavLink id="nav-title" className="nav-link" to="/login">LOGIN/REGISTER</NavLink>
            </li>
          </ul>
            <button id="nav-title" className="btn btn-outline-success" type="submit">LOGIN/REGISTER</button>
        </div>
      </div>
  </nav>
     );
}
 
export default NavBar;