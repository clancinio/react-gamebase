import React from "react";
// Redux
import { useSelector } from "react-redux";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

function GameDetail() {
  // Get data from state
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="details">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="gallary">
          {screen.results.map((screen) => (
            <img src={screen.image} alt="image" key={screen.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
