import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameList.css";
import Game from "../Game/Game";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [bestGames, setBestGames] = useState(false);

  useEffect(() => {
    axios
      .get(" https://wild-games.herokuapp.com/api/v1")
      .then((res) => setGames(res.data));
  }, []);

  const deleteGame = (game) => {
    //on prend en paramètre un film "game" au singulier
    const position = games.indexOf(game); // Identifier la position de chaque jeu dans le tableau
    console.log(position); // au click sur les boutons chaque film affiche sa position
    games.splice(position, 1); // Elle prend en premier argument la position à partir de laquelle on commence la suppression et en deuxième argument le nombre d'éléments à supprimer.
    setGames([...games]);
    console.log(games); // L'element est bien supprimé du tableau
  };

  const displayButtonName = bestGames ? "All games" : "Best Games";

  const filterCondition = bestGames
    ? games
        .filter((game) => {
          return game.rating >= 4.5;
        })
        .map((game, index) => (
          <Game key={index} game={game} deleteGame={deleteGame} />
        ))
    : games.map((game, index) => (
        <Game key={index} game={game} deleteGame={deleteGame} />
      ));

  return (
    <div>
      <div className="menu">
        <h1>Games library</h1>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setBestGames(!bestGames);
          }}
        >
          {displayButtonName}
        </button>
      </div>

      <div className="game-list">{filterCondition}</div>
    </div>
  );
};

export default GameList;
