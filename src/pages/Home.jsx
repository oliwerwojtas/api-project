import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//components
import GameDetail from "../components/gameDetails/GameDetails";
import GamesFiltring from "../components/GamesFiltring";
import SortDropdown from "../components/Dropdown";
//utilities
import { loadGames } from "../store/actions/gamesAction";
import { loadGenres } from "../store/actions/genresAction";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
import Select from "react-select";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { customStyles } from "../configs/utils";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState({ value: "name-asc", label: "Name A-Z" });
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadGenres());
  }, [dispatch]);

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

  const handleSelectChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <ToastContainer position="top-center" style={{ paddingTop: "2rem" }} autoClose={3000} />
      <SelectContainer>
        <Selectt
          placeholder="Wybierz..."
          options={options}
          onChange={handleSelectChange}
          styles={customStyles}
          defaultValue={{ value: null, label: "All" }}
        />
      </SelectContainer>
      <AnimatePresence> {pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      <SortDropdown handleSortChange={handleSortChange} />
      <SectionTitle>Upcoming Games</SectionTitle>
      <Games>
        <GamesFiltring
          games={upcoming}
          categories={genres}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Games>
      <SectionTitle>Popular Games</SectionTitle>
      <Games>
        <GamesFiltring
          games={popular}
          categories={genres}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Games>
      <SectionTitle>New Games</SectionTitle>
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
`;

const Games = styled(motion.div)`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

const Selectt = styled(Select)`
  min-width: 300px;
  @media (max-width: 465px) {
    min-width: 150px;
  }
`;
const SectionTitle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  font-weight: bold;
  margin: 2rem 0;
`;

const SelectContainer = styled(motion.div)`
  display: flex;
`;
export default Home;
