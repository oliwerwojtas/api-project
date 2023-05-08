import React, { useEffect } from "react";
import GameDetail from "../components/gameDetails/GameDetails";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadGames } from "../actions/gamesAction";
import { loadGenres } from "../actions/genresAction";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
import GamesFiltring from "../components/GamesFiltring";
import Select from "react-select";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadGenres());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);

  const { genres } = useSelector((state) => state.genres);
  console.log(newGames);
  const options = genres
    ? [
        {
          value: null,
          label: "All",
        },
        ...genres.map((genre) => ({
          value: genre.id,
          label: genre.name,
        })),
      ]
    : [];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState({ value: "name-asc", label: "Name A-Z" });

  // filter games by selected category

  const handleSelectChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <div>
        <StyledSelect options={options} onChange={handleSelectChange} />
      </div>
      <div>
        <Select
          options={[
            { value: "name-asc", label: "Name A-Z" },
            { value: "name-desc", label: "Name Z-A" },
          ]}
          value={sortOption}
          onChange={handleSortChange}
        />
      </div>

      <AnimatePresence> {pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      {searched.length > 0 ? (
        <div className="searched">
          <Games>
            <GamesFiltring
              games={searched}
              categories={genres}
              selectedCategory={selectedCategory}
            />
          </Games>
        </div>
      ) : (
        ""
      )}

      <h2>Upcoming Games</h2>
      <Games>
        <GamesFiltring
          games={upcoming}
          categories={genres}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Games>
      <h2>Popular Games</h2>
      <Games>
        <GamesFiltring
          games={popular}
          categories={genres}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Games>
      <h2>NewGames Games</h2>
      <Games>
        <GamesFiltring
          games={newGames}
          categories={genres}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 2rem;
  h2 {
    color: white;
  }
`;

const Games = styled(motion.div)`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  justify-content: center;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  max-width: 300px;
`;
export default Home;
