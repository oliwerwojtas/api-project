import styled from "styled-components";
import { motion } from "framer-motion";
const Series = ({ series }) => {
  return (
    <SeriesContainer>
      <h3>Series</h3>
      {series.results.map((series) => (
        <div>
          <p>{series.name}</p>
          <img src={series.background_image} alt="series background" />
        </div>
      ))}
    </SeriesContainer>
  );
};
const SeriesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default Series;
