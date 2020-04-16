import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import Pagination from "../Pagination/Pagination";
import "./BeerSearchResults.css";

const BeerSearchResults = (props) => {
  const beerList = props.searchBeerResults.map((beer, idx) => {
    return (
      <Card.Group>
        <Card className="ui centered card" style={{ width: "800px" }}>
          <Card.Content>
            <Image
              floated="left"
              src={
                props.beers[idx].labels
                  ? props.beers[idx].labels.icon
                  : "https://i.imgur.com/DYjJL5I.png"
              }
              wrapped
              ui={false}
              alt={beer}
              width={!props.beers[idx].labels ? "35px" : ""}
              height={!props.beers[idx].labels ? "70px" : ""}
            />
            <Card.Header>{beer}</Card.Header>
            <Card.Meta>{props.beers[idx].abv}</Card.Meta>
            <Card.Description>{props.beers[idx].description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button
                onClick={() => props.handleFavAddButtonClick(props.beers[idx])}
                icon
                labelPosition="left"
              >
                <Icon name="beer" color="green" />
                Add to Fridge
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  });
  return (
    <div>
      {beerList}
      <Pagination numberOfPages={props.numberOfPages} />
    </div>
  );
};

export default BeerSearchResults;
