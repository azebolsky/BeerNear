import React from "react";
import './FridgeList.css'
import { Card, Button } from "semantic-ui-react";

const FridgeList = ({ beer, handleDeleteFavorite }) => {
    return (
        <Card.Group>
            <Card className="ui centered">
                <Card.Content>
                    <img
                        className="center floated tiny ui image"
                        src={beer.icon !== "https://i.imgur.com/DYjJL5I.png" ? beer.icon : "https://i.imgur.com/KJBRJU3.png"}
                        alt="beer"
                    />
                    <Card.Header>
                        {beer.name}
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button
                        className="ui inverted red button"
                        onClick={() => handleDeleteFavorite({ id: beer._id, beerId: beer.beerId })}
                    >
                        Delete
                    </Button>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default FridgeList;
