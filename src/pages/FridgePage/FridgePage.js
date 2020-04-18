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
      <div className="Fridge-Page">
        {this.props.favBeers.map((beer, idx) => (
          <FridgeList
            key={idx}
            favBeers={this.props.favBeers}
            beer={beer}
            handleDeleteFavorite={this.props.handleDeleteFavorite}
          />
        ))}
      </div>
    )
  }
}

export default FridgePage;
