import React from "react";
import FridgeList from '../../components/FridgeList/FridgeList'
import "./FridgePage.css";

const FridgePage = (props) => {
  return (
    <div className="Fridge-Page">
      {props.favBeers.map((beer, idx) => (
        <FridgeList
          key={idx}
          favBeers={props.favBeers}
          beer={beer}
          handleDeleteFavorite={props.handleDeleteFavorite}
        />
      ))}
    </div>
  )
}

export default FridgePage;
