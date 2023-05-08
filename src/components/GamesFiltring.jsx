import React from "react";
import Game from "../components/Game";

const GamesFiltring = ({ games, categories, selectedCategory, sortOption }) => {
  const filteredGames = games.filter((game) => {
    if (selectedCategory === null) {
      return true;
    }
    return game.genres.find((genre) => genre.id === selectedCategory.value);
  });

  const sortedGames = filteredGames.sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  return (
    <>
      {sortedGames.map((game) => (
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
