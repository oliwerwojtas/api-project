import { useComponentStyles } from "../../hooks/useComponentStyles";
const Gallery = ({ screen }) => {
  const { Container, Image } = useComponentStyles();
  return (
    <Container>
      <h3>Screens:</h3>
      {screen.results.map((screen) => (
        <Image>
          <img src={screen.image} key={screen.id} alt="game" />
        </Image>
      ))}
    </Container>
  );
};

export default Gallery;
