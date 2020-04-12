import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div className="NavBar-link">
      <Link to="" onClick={props.handleLogout}>
        LOG OUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
    </div>
  ) : (
    <div className="NavBar-link">
      <Link to="/login">LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup">SIGN UP</Link>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
