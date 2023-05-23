import styled from "styled-components";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { motion } from "framer-motion";
import { favoriteVariants } from "../animations";

const FavoriteButton = ({ isFavorite, addToFavoritesHandler }) => {
  return (
    <Button onClick={addToFavoritesHandler}>
      <motion.div
        variants={favoriteVariants}
        initial={isFavorite ? "animate" : "initial"}
        animate={isFavorite ? "animate" : "initial"}
        exit="initial"
        transition={{ duration: 0.5 }}
      >
        {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </motion.div>
    </Button>
  );
};

const Button = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  padding: 0.3rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default FavoriteButton;
