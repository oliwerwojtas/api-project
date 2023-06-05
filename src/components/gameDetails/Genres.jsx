import { useComponentStyles } from "../../hooks/useComponentStyles";

const Genres = ({ game }) => {
  const { Container, Genre } = useComponentStyles();
  return (
    <Container>
      <span>Genres:</span>
      {game.genres.map((genre) => (
        <Genre>
          <strong>{genre.name}</strong> -<p> in total games({genre.games_count})</p>
        </Genre>
      ))}
    </Container>
  );
};

export default Genres;
