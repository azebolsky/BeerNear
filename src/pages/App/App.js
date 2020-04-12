import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../services/userService";
import NavBar from "../../components/SignupForm/NavBar/NavBar";
import { getCurrentLatLng } from "../../services/geolocation";
import BeerSearch from "../../components/BeerSearch/BeerSearch";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      lat: null,
      lng: null,
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    // Destructure the object returned from getCurrentLatLng()
    const { lat, lng } = await getCurrentLatLng();
    this.setState({
      lat,
      lng,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-nav-container">
            <NavLink className="App-nav-title" exact to="/">
              BeerNear
            </NavLink>
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  className="App-nav"
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  className="App-nav"
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          </nav>
        </header>
        <BeerSearch />
      </div>
    );
  }
}

export default App;
