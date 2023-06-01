import { useComponentStyles } from "../../hooks/useComponentStyles";

const Series = ({ series }) => {
  const { Container } = useComponentStyles();
  return (
    <Container>
      <span>Series</span>
      {series && series.results.length > 0 ? (
        series.results.map((series) => (
          <div key={series.id}>
            <p>{series.name}</p>
            <img src={series.background_image} alt="series background" />
          </div>
        ))
      ) : (
        <p>No data!</p>
      )}
    </Container>
  );
};

export default Series;
