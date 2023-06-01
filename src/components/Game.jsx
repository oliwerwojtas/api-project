import { useState, useEffect } from "react";
//components
import FavoriteButton from "./FavouriteButton";
//utilities
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../store/actions/detailAction";
import { addToFavorites } from "../store/slices/favoritesSlice";
import { popup } from "../animations";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [alreadyIn, setAlreadyIn] = useState(false);

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favoritesItems");
    if (favoritesFromStorage) {
      const favorites = JSON.parse(favoritesFromStorage);
      const isGameFavorite = favorites.some((favorite) => favorite.id === id);
      setIsFavorite(isGameFavorite);
    }
  }, [id]);

  const loadHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const addToFavoritesHandler = (event) => {
    event.stopPropagation();
    const game = { id, name, released, image };
    dispatch(addToFavorites(game));
    setIsFavorite(!isFavorite);
    setAlreadyIn(true);
  };

  return (
    <GameContainer
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={`container ${id}`}
      onClick={loadHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>

        <p>{released}</p>
        <motion.img layoutId={`image ${id}`} src={image} />
      </Link>
      <FavoriteButton isFavorite={isFavorite} addToFavoritesHandler={addToFavoritesHandler} />
    </GameContainer>
  );
};

const GameContainer = styled(motion.div)`
  position: relative;
  min-height: 30vh;

  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #202020;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
  h3,
  p {
    color: white;
  }
  h3 {
    height: 8rem;
  }
`;

export default Game;
