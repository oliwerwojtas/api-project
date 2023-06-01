import { useComponentStyles } from "../../hooks/useComponentStyles";
const Gallery = ({ screen }) => {
  const { Container, Image } = useComponentStyles();
  return (
    <Container>
      <span>Screens:</span>
      {screen.results.map((screen) => (
        <Image>
          <img src={screen.image} key={screen.id} alt="game" />
        </Image>
      ))}
    </Container>
  );
};

export default Gallery;
