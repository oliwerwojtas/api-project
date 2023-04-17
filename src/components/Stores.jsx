import styled from "styled-components";
import { motion } from "framer-motion";
const Stores = ({ game }) => {
  return (
    <StoresContainer>
      <h3>Series</h3>
      <p>Where can I buy it?</p>
      {game.stores.map((gameStore) => (
        <div>
          <p>{gameStore.store.name}</p>
          <img src={gameStore.store.image_background} alt="store logo" />
        </div>
      ))}
    </StoresContainer>
  );
};
const StoresContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default Stores;
