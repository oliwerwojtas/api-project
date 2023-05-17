import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gamepad from "../assets/gamelogo.svg";
import { fadeIn } from "../animations";
//
import { loadDetail } from "../store/actions/detailAction";
import { fetchSearch } from "../store/actions/gamesAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
//
import { BiLibrary } from "react-icons/bi";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  const { popular, allGames, searched } = useSelector((state) => state.games);
  const { favoritesItems } = useSelector((state) => state.favorites);
  const [filteredResults, setFilteredResults] = useState([]);

  // const clickCount = useSelector((state) => state.counter.clickCount);
  const debouncedTextInput = useDebounce(textInput, 500);

  useEffect(() => {
    if (debouncedTextInput) {
      const filteredResults = searched.filter((gameStore) =>
        gameStore.name.toLowerCase().includes(debouncedTextInput.toLowerCase())
      );
      setFilteredResults(filteredResults);
      dispatch(fetchSearch(debouncedTextInput));
    } else {
      setFilteredResults([]);
    }
  }, [debouncedTextInput, dispatch]);

  // const submitSearch = (e) => {
  //   e.preventDefault();

  //   setTextInput("");
  // };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  const handleClick = (id, path) => {
    dispatch(loadDetail(id));
    setTextInput("");
    navigate(path);
  };

  console.log("xd");
  console.log(popular);
  console.log(typeof allGames);
  return (
    <StyledNavigation variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={gamepad} alt="logo" />
        <h1>GameFinder</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Search "
        />
        {textInput && (
          <Results>
            {filteredResults.slice(0, 20).map((gameStore) => (
              <div
                key={gameStore.id}
                onClick={() => handleClick(gameStore.id, `/game/${gameStore.id}`)}
              >
                <p>{gameStore.name}</p>
              </div>
            ))}
          </Results>
        )}
      </form>
      <div className="search-icon">
        <span>Favourite</span>
        <span>{favoritesItems.length}</span>
        <BiLibrary />
      </div>
    </StyledNavigation>
  );
};

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    filter: invert(1);
  }
`;

const StyledNavigation = styled(motion.nav)`
  display: flex;
  flex-wrap: wrap;
  padding: 1.6rem 5rem;
  width: 100%;
  h1 {
    color: white;
  }
  form 
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  input{
    border-radius: .5rem;
    min-width: 300px;
    padding: .6rem;
    display: flex;
  }
  
  
  input::placeholder {
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: center; 
    align-items: center;

     
      
    }
    .search-icon {
      display: flex;
      justify-content: end;
      align-items: center;
      background-color: #151515;
      border-radius: 0.5rem;
     
      margin-left: auto;
      margin-right: 6rem;
    }
    
`;

const Results = styled(motion.div)`
  width: 300px;
  height: max-content;
  background-color: red;
  position: absolute;
  z-index: 1;
`;

export default Navigation;
