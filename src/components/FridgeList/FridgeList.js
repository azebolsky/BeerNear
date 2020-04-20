import React from "react";

const FridgeList = ({ beer, handleDeleteFavorite }) => {
    return (
        <div className="card">
            <div className="content">
                <img
                    className="center floated small ui image"
                    src={beer.icon !== "https://i.imgur.com/DYjJL5I.png" ? beer.icon : "https://i.imgur.com/KJBRJU3.png"}
                    alt="beer"
                />
                <div className="header">
                    {beer.name}
                </div>
            </div>
            <div className="extra content">
                <button
                    className="ui inverted red button"
                    onClick={() => handleDeleteFavorite({ id: beer._id, beerId: beer.beerId })}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default FridgeList;
