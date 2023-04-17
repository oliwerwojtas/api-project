import React from "react";
import Game from "../components/Game";

const GamesFiltring = ({ games, categories, selectedCategory }) => {
  const filteredGames = games.filter((game) => {
    if (selectedCategory === null) {
      return true;
    }
    return game.genres.find((genre) => genre.id === selectedCategory.value);
  });

  return (
    <>
      {filteredGames.map((game) => (
        <Game
          key={game.id}
          name={game.name}
          released={game.released}
          id={game.id}
          image={game.background_image}
        />
      ))}
    </>
  );
};

export default GamesFiltring;
