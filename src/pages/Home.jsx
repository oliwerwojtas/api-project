import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import Game from "../components/Game";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get data
  const { popular, newGames, upcoming, platforms } = useSelector((state) => state.games);

  return (
    <div>
      <h2>Upcoming Games</h2>
      <div>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
