import { useComponentStyles } from "../../hooks/useComponentStyles";

const Series = ({ series }) => {
  const { Container } = useComponentStyles();
  return (
    <Container>
      <h3>Series</h3>
      {series.results.map((series) => (
        <div>
          <p>{series.name}</p>
          <img src={series.background_image} alt="series background" />
        </div>
      ))}
    </Container>
  );
};

export default Series;
