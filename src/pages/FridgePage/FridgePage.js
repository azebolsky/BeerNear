import React, { Component } from "react";
import FridgeList from '../../components/FridgeList/FridgeList'
import "./FridgePage.css";
import apiService from '../../services/apiService'

class FridgePage extends Component {

  async componentDidMount() {
    const favoriteBeers = await apiService.allFavorites();
    this.props.handleFavoriteScores(favoriteBeers);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: "20px" }}>
          <h1 className="Fridge-Header">{this.props.favBeers.length ? "Grab a cold one from the fridge!" : "Oh no, the fridge is empty"}</h1>
        </div>
        <div className="ui cards">
          {this.props.favBeers.map((beer, idx) => (
            <FridgeList
              key={idx}
              favBeers={this.props.favBeers}
              beer={beer}
              handleDeleteFavorite={this.props.handleDeleteFavorite}
            />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default FridgePage;
