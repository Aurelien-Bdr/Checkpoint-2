import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(" https://wild-games.herokuapp.com/api/v1")
      .then((res) => setGames(res.data));
  }, [games]);

  return <div>test</div>;
};

export default GameList;
