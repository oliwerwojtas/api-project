import { useComponentStyles } from "../../hooks/useComponentStyles";

const Genres = ({ game }) => {
  const { Container, Genre } = useComponentStyles();
  return (
    <Container>
      <h3>Genres:</h3>
      {game.genres.map((genre) => (
        <Genre>
          {genre.name} -<p> in total games({genre.games_count})</p>
        </Genre>
      ))}
    </Container>
  );
};

export default Genres;
