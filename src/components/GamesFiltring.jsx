import React from "react";
import Game from "../components/Game";

const GamesFiltring = ({ games, categories, selectedCategory, sortOption }) => {
  const filteredGames = games.filter((game) => {
    if (selectedCategory === null || selectedCategory.value === null) {
      return true;
    }
    return game.genres.find((genre) => genre.id === selectedCategory.value);
  });

  const sortedGames = filteredGames.sort((a, b) =>
    sortOption === "name-asc"
      ? a.name.localeCompare(b.name)
      : sortOption === "name-desc"
      ? b.name.localeCompare(a.name)
      : 0
  );
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
