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
import "react-dropdown/style.css";
const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState({ value: "name-asc", label: "Name A-Z" });
  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);

  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadGenres());
  }, [dispatch]);

  console.log(popular);

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
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#202020",
      borderRadius: "0.5rem",
      borderColor: "#202020",
      color: "white",
    }),
  };

  // filter games by selected category

  const handleSelectChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <SelectDropdown>
        <StyledSelect
          placeholder="Wybierz..."
          options={options}
          onChange={handleSelectChange}
          styles={customStyles}
        />
      </SelectDropdown>
      <AnimatePresence> {pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      {/* {searched.length > 0 ? (
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
      )} */}
      <Dropdown className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Order by
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <button onClick={() => handleSortChange({ value: "name-asc", label: "Name A-Z" })}>
              Name A-Z
            </button>
          </li>
          <li>
            <button onClick={() => handleSortChange({ value: "name-desc", label: "Name Z-A" })}>
              Name Z-A
            </button>
          </li>
        </ul>
      </Dropdown>
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
  min-width: 300px;
`;

const SelectDropdown = styled(motion.div)`
  display: flex;
`;

const Dropdown = styled(motion.div)`
  display: flex;
  justify-content: end;
`;
export default Home;
