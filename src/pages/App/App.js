import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../services/userService";
import NavBar from "../../components/NavBar/NavBar";
import { getCurrentLatLng } from "../../services/geolocation";
import BeerSearchBar from "../../components/BeerSearchBar/BeerSearchBar";
import { getAllBeers } from "../../services/api-service";
import FridgePage from "../FridgePage/FridgePage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      lat: null,
      lng: null,
      beers: [],
      searchBeerResults: [],
      loading: true,
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
      const { data } = JSON.parse(response);
      this.setState({
        lat,
        lng,
        beers: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getBeerResults = async (beerName) => {
    try {
      let beerArray = [];
      await this.state.beers.filter((beer) => {
        if (beer.name.toLowerCase().includes(beerName.toLowerCase())) {
          beerArray.push(beer.name);
        }
      });
      this.setState({ searchBeerResults: [...beerArray] });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.loading) {
      return <p>loading...</p>;
    }
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
          <BeerSearchBar
            getBeerResults={this.getBeerResults}
            beers={this.state.beers}
            searchBeerResults={this.state.searchBeerResults}
          />
        </Route>
        <Route exact path="/fridge">
          <FridgePage />
        </Route>
      </div>
    );
  }
}

export default App;
