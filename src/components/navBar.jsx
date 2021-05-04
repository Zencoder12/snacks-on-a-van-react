import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ user }) => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">VanSnaCk</NavLink>
          <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/orders">Orders</NavLink>
          </li>
          {!user && (
          <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" tabIndex="-1">Register</NavLink>
            </li>
          </React.Fragment>
          )}
          {user && (
          <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login"><strong>{user.firstName}</strong></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" tabIndex="-1">Logout</NavLink>
            </li>
          </React.Fragment>
          )}
        </ul>
      </div>
    </div>
</nav>
     );
}
 
export default NavBar;