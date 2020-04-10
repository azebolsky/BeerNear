import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink className="App-nav-title" exact to="/">
              BeerNear
            </NavLink>
            <NavLink className="App-nav" exact to="/signup">
              Signup
            </NavLink>
            <NavLink className="App-nav" exact to="/login">
              Login
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
