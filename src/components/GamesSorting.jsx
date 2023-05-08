import Game from "./Game";
const GamesSorting = ({ games, sortOption, handleSortChange }) => {
  const sortedGames = games.sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  const options = [
    { value: "name-asc", label: "Name A-Z" },
    { value: "name-desc", label: "Name Z-A" },
  ];
  return (
    <>
      <div>
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
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

export default GamesSorting;
