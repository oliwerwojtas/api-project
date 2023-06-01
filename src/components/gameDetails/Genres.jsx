import { useComponentStyles } from "../../hooks/useComponentStyles";

const Genres = ({ game }) => {
  const { Container, Genre } = useComponentStyles();
  return (
    <Container>
      <span>Genres:</span>
      {game.genres.map((genre) => (
        <Genre>
          <span>{genre.name}</span> -<p> in total games({genre.games_count})</p>
        </Genre>
      ))}
    </Container>
  );
};

export default Genres;
