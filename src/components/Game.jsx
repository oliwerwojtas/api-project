import styled from "styled-components";
import { motion } from "framer-motion";
const Game = ({ name, released, id, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} />
    </div>
  );
};

export default Game;
