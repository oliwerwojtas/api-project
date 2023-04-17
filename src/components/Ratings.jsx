import styled from "styled-components";
import { motion } from "framer-motion";
const Ratings = ({ game }) => {
  return (
    <RatingsContainer>
      <h3>Ratings:</h3>
      {game.ratings.map((el) => (
        <p>
          {el.title} - {el.count}
        </p>
      ))}
    </RatingsContainer>
  );
};
const RatingsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default Ratings;
