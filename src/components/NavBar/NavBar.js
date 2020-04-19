import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <React.Fragment>
      <Link to="/fridge" style={{ color: "rgb(92, 139, 45)" }}>{props.user.name}'s Fridge</Link>
      <Link to="" onClick={props.handleLogout} style={{ color: "rgb(176, 82, 82)" }}>
        LOG OUT
      </Link>
    </React.Fragment>
  ) : (
      <React.Fragment>
        <Link to="/login" style={{ color: "rgb(92, 139, 45)" }}>LOG IN</Link>
        <Link to="/signup" style={{ color: "rgb(92, 139, 45)" }}>SIGN UP</Link>
      </React.Fragment>
    );
  return (
    <div className="Navbar">
      <div className="Menu Menu-1">
        <NavLink exact to="/" style={{ color: "rgb(127, 163, 87)", textShadow: "1px 4px darkGreen" }}>
          BeerNear
          </NavLink>
      </div>
      <div className="logo">
        <img src="https://i.imgur.com/292qkwS.png" alt="logo" />
      </div>
      <div className="Menu Menu-2">
        {nav}
      </div>
    </div>
  )
};

export default NavBar;
