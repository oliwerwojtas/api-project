import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gamepad from "../assets/gamelogo.svg";
import { fadeIn } from "../animations";

//
import { loadDetail } from "../store/actions/detailAction";
import { fetchSearch, loadGames } from "../store/actions/gamesAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
//
import { BiLibrary } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  const { popular, allGames, searched } = useSelector((state) => state.games);
  const { favoritesItems } = useSelector((state) => state.favorites);
  const [filteredResults, setFilteredResults] = useState([]);
  const [favoriteResultsVisible, setFavoriteResultsVisible] = useState(false);
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
    setFilteredResults([]);
    setTextInput("");
  };

  const handleClick = (id, path) => {
    dispatch(loadDetail(id));
    setTextInput("");
    navigate(path);
  };
  const handleFavoriteClick = () => {
    setFavoriteResultsVisible(!favoriteResultsVisible);
  };

  const handleFavoriteItemClick = (e) => {
    e.stopPropagation();
    // Dodaj dowolne inne działania, które chcesz wykonać po kliknięciu w ulubiony przedmiot
  };
  const handleHideFavoriteResults = () => {
    setFavoriteResultsVisible(false);
  };
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
          placeholder={`Search from ${allGames} games...`}
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
      <div className="search-icon" onClick={handleFavoriteClick}>
        <BiLibrary size={20} />
        <span>Favourite</span>
        <span>({favoritesItems.length})</span>

        {favoriteResultsVisible && (
          <ResultsFavo
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            onClick={handleFavoriteItemClick}
          >
            <div onClick={handleHideFavoriteResults}>xd</div>
            {favoritesItems.map((favoriteItem) => (
              <Item key={favoriteItem.id}>
                <img src={favoriteItem.image} alt="game background" />
                <span>{favoriteItem.name}</span>
                <BsTrash size={20} />
              </Item>
            ))}
          </ResultsFavo>
        )}
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

  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
    margin-bottom: 1rem;
    align-items: center;
    img {
    }
    h1 {
      font-size: 1.5rem;
    }
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
    
  }
  
  
  input::placeholder {
    color: gray;
    font-size: 0.6rem;
  

     
      
    }
    .search-icon {
      display: flex;
      justify-content: end;
      align-items: center;
      background-color: #151515;
      border-radius: 0.5rem;
      position: relative;
      margin-left: auto;
      margin-right: 6rem;
    }

    @media (max-width: 400px) {
    input {
      min-width: 50px;
    }
    .search-icon {
      margin-right: 0;
    }
  }
    
`;

const Results = styled(motion.div)`
  width: 300px;
  height: max-content;
  background-color: #202020;
  position: absolute;
  z-index: 1;

  p {
    color: white;
    padding: 0.2rem;
  }
`;

const ResultsFavo = styled(motion.div)`
  min-width: 700px;
  height: 400px;
  overflow-y: scroll;
  background-color: #202020;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: white;
  img {
    width: 10rem;
    margin-right: 0.5rem;
  }

  svg {
    margin-left: auto;
  }
`;

export default Navigation;
