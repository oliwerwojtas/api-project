import styled from "styled-components";
import { motion } from "framer-motion";
const Genres = ({ game }) => {
  return (
    <GenresContainer>
      <h3>Genres:</h3>
      {game.genres.map((genre) => (
        <Genre>
          {genre.name} -<p> in total games({genre.games_count})</p>
        </Genre>
      ))}
    </GenresContainer>
  );
};
const GenresContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Genre = styled(motion.div)`
  display: flex;
`;
export default Genres;
