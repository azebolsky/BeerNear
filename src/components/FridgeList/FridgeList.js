import React from "react";
import { Card } from 'semantic-ui-react'

const FridgeList = ({ beer, handleDeleteFavorite }) => {
    return (
        <div>
            <Card>
                {/* <img
                    src={beer.icon}
                    alt="beer"
                    width={beer.icon === "https://i.imgur.com/DYjJL5I.png" ? "35px" : ""}
                    height={beer.icon === "https://i.imgur.com/DYjJL5I.png" ? "35px" : ""}
                /> */}
                <Card.Content>
                    <Card.Header>{beer.name}</Card.Header>
                    <Card.Description>ABV-{beer.abv}%</Card.Description>
                    <button
                        onClick={() => handleDeleteFavorite(beer.beerId)}
                    >
                        Delete
                    </button>
                </Card.Content>
            </Card>
        </div>
    )
}

export default FridgeList;