import React from "react";
import "./BeerSearchResults.css";

const BeerSearchResults = (props) => {
  const request = props.beers.map((beer) => beer);

  return <div className="Beer-Search-Results">{request}</div>;
};

export default BeerSearchResults;
