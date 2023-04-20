import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gamelogo from "../img/gamelogo.svg";
import { fadeIn } from "../animations";
//
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNavigation variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={gamelogo} alt="logo" />
        <h1>GameFinder</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNavigation>
  );
};

const StyledNavigation = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 80%;
    font-size: 1.5rem;
    padding: 0.2rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 0.5rem;
  }
  button {
    border-radius: 0.5rem;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    margin-left: 0.5rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
`;

export default Navigation;
