import React from "react";
import "./Game.css";

const Game = ({ game, deleteGame }) => {
  return (
    <div className="game-container">
      <h1 className="game-title">{game.name}</h1>
      <img className="game-photo" alt="game" src={game.background_image} />
      <p className="game-rating">{game.rating}</p>
      <button
        onClick={() => {
          deleteGame(game);
        }}
      >
        Supprimer
      </button>
    </div>
  );
};

export default Game;
