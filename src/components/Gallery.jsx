import styled from "styled-components";
import { motion } from "framer-motion";
const Gallery = ({ screen }) => {
  return (
    <GalleryContainer>
      <h3>Screens:</h3>
      {screen.results.map((screen) => (
        <Image>
          <img src={screen.image} key={screen.id} alt="game" />
        </Image>
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

const Image = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Gallery;
