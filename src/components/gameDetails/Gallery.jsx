import { useComponentStyles } from "../../hooks/useComponentStyles";
const Gallery = ({ screen }) => {
  const { Container, Image } = useComponentStyles();
  return (
    <Container>
      <span>Screens:</span>
      {screen &&
        screen.results &&
        screen.results.map((screen) => (
          <Image key={screen.id}>
            <img src={screen.image} alt="game" />
          </Image>
        ))}
    </Container>
  );
};

export default Gallery;
