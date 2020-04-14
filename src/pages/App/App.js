import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../services/userService";
import NavBar from "../../components/NavBar/NavBar";
import { getCurrentLatLng } from "../../services/geolocation";
import BeerSearch from "../../components/BeerSearch/BeerSearch";
import { getAllBeers } from "../../services/api-service";
import BeerListPage from "../../components/BeerListPage/BeerListPage";
import FridgePage from "../FridgePage/FridgePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      lat: null,
      lng: null,
      beers: [],
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
    try {
      const { lat, lng } = await getCurrentLatLng();
      const response = await getAllBeers();
      const data = JSON.parse(response);
      this.setState({
        lat,
        lng,
        beers: data,
      });
    } catch (error) {}
    console.log(this.state.beers.data[0].name);
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
        <Route exact path="/">
          <BeerSearch {...this.state.beers} />
        </Route>
        <Route>
          <BeerListPage {...this.state.beers} />
        </Route>
        {/* <li>{this.state.beers.data[0].name}</li> */}
        <Route exact path="/fridge">
          <FridgePage />
        </Route>
      </div>
    );
  }
}

export default App;
