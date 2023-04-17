import styled from "styled-components";
import { motion } from "framer-motion";
const Genres = ({ game }) => {
  return (
    <GenresContainer>
      <h3>Genres:</h3>
      {game.genres.map((genre) => (
        <div>
          <p>{genre.name}</p>
          <p>counts games in total({genre.games_count})</p>
        </div>
      ))}
    </GenresContainer>
  );
};
const GenresContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default Genres;
