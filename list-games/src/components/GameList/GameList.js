import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameList.css";
import Game from "../Game/Game";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(" https://wild-games.herokuapp.com/api/v1")
      .then((res) => setGames(res.data));
  }, [games]);

  return (
    <div className="game-list">
      {games.map((game, index) => (
        <Game key={index} game={game} />
      ))}
    </div>
  );
};

export default GameList;
