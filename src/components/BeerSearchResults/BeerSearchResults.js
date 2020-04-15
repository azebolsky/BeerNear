import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./BeerSearchResults.css";

const BeerSearchResults = (props) => {
  const beerList = props.searchBeerResults.map((beer, idx) => {
    console.log(props.beers[0].name);
    return (
      <Card.Group>
        <Card key={idx} className="ui centered card" style={{ width: "800px" }}>
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
            <div className="ui one button">
              <Icon name="beer" color="green" size="large">
                <button color="green"></button>
              </Icon>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  });
  return <div>{beerList} -</div>;
};

export default BeerSearchResults;
