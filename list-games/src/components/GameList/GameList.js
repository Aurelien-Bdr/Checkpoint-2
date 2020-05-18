import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";
import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [bestGames, setBestGames] = useState(false);

  useEffect(() => {
    axios
      .get(" https://wild-games.herokuapp.com/api/v1")
      .then((res) => setGames(res.data));
  }, []);

  const deleteGame = (game) => {
    const position = games.indexOf(game);
    games.splice(position, 1);
    setGames([...games]);
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
