import styled from "styled-components";
import { motion } from "framer-motion";
const Gallery = ({ screen }) => {
  return (
    <GalleryContainer>
      <h3>Screens:</h3>
      {screen.results.map((screen) => (
        <img src={screen.image} key={screen.id} alt="game" />
      ))}
    </GalleryContainer>
  );
};
const GalleryContainer = styled(motion.div)`
  img {
    width: 100%;
    max-width: 400px;
  }
`;
export default Gallery;
