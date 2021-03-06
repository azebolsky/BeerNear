import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import Pagination from "../Pagination/Pagination";
import "./BeerSearchResults.css";
import userService from "../../services/userService";

const BeerSearchResults = (props) => {
  const beerList = props.searchBeerResults.map((beer, idx) => {
    return (
      <Card key={props.beers[idx].id} className="ui centered card">
        <Card.Content>
          <Image
            style={{ marginRight: "5px" }}
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
          <Card.Meta>ABV: {props.beers[idx].abv ? `${props.beers[idx].abv}%` : "N/A"}</Card.Meta>
          <Card.Meta>IBU: {props.beers[idx].ibu ? props.beers[idx].ibu : "N/A"}</Card.Meta>
        </Card.Content>
        {userService.getUser() ?
          <Card.Content extra>
            <div>
              {props.favBeers.every((b) => b.name !== props.beers[idx].name) ?
                <Button
                  onClick={() => props.handleFavAddButtonClick({
                    name: props.beers[idx].name,
                    abv: props.beers[idx].abv ? props.beers[idx].abv : "5",
                    beerId: props.beers[idx].id,
                    icon: props.beers[idx].labels ? props.beers[idx].labels.icon : "https://i.imgur.com/DYjJL5I.png"
                  })}
                  icon
                  labelPosition="left"
                >
                  <Icon size="large" name="beer" color="green" />
                  Add to Fridge
                </Button>
                :
                <p>Already added to fridge</p>
              }
            </div>
          </Card.Content>
          : ""
        }
      </Card>
    );
  });
  return (
    <div className="BeerListContainer">
      <Card.Group>
        {beerList}
        <Pagination numberOfPages={props.numberOfPages} />
      </Card.Group>
    </div>
  );
};

export default BeerSearchResults;
