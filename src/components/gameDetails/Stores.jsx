import { useComponentStyles } from "../../hooks/useComponentStyles";
const Stores = ({ game }) => {
  const { Container } = useComponentStyles();
  return (
    <Container>
      <h3>Series</h3>
      <p>Where can I buy it?</p>
      {game.stores.map((gameStore) => (
        <div key={game.name}>
          <p>- {gameStore.store.name}</p>
        </div>
      ))}
    </Container>
  );
};

export default Stores;
