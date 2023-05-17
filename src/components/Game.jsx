import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../store/actions/detailAction";
import { useState } from "react";
import { popup } from "../animations";
import { addToFavorites } from "../store/slices/favoritesSlice";

const Game = ({ name, released, image, id }) => {
  // const stringPathId = id.toString();
  const dispatch = useDispatch();

  const loadHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  const addToWishHandler = (event) => {
    event.stopPropagation();
    const product = { id, name, released, image };
    dispatch(addToFavorites(product));
  };

  return (
    <StyleGame
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
      <Icon onClick={addToWishHandler}></Icon>
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
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
const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default Game;
