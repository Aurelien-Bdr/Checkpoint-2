import React from "react";
import "./Game.css";

const Game = ({ game }) => {
  return (
    <div className="game-container">
      <h1 className="game-title">{game.name}</h1>
      <img className="game-photo" alt="game" src={game.background_image} />
    </div>
  );
};

export default Game;
