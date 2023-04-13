import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Platform from "./Platforms";
import Stars from "./Stars";
const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const closeDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //get stars

  const { screen, game, series, achievements, isLoading } = useSelector((state) => state.detail);

  console.log(game);
  console.log(game.website);
  console.log(game.genres);
  console.log(series);
  console.log(achievements);
  // console.log(game.stores.store);
  console.log(screen);
  console.log(game.ratings);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={closeDetailHandler}>
          <Detail layoutId={`container ${pathId}`}>
            <Stats>
              <GameName>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
              </GameName>
              <div>
                <p>Rating: {game.rating}</p>
                <Stars rating={game.rating} />
                <h3>Raings:</h3>
                {game.ratings.map((el) => (
                  <div>
                    <p>
                      {el.title} - {el.count}
                    </p>
                  </div>
                ))}
              </div>
            </Stats>
            <Info>
              <h3>Platforms</h3>

              <Platform platforms={game.platforms} />
            </Info>

            <div>
              <h3>Website</h3>
              <a href={game.website} target="_blank">
                {game.website}
              </a>
            </div>
            <div>
              <h3>Genres:</h3>
              {game.genres.map((el) => (
                <div>
                  <p>{el.name}</p>
                  <p>counts games in total({el.games_count})</p>
                </div>
              ))}
            </div>
            <Media>
              <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="image" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt="game" />
              ))}
            </div>
            <div>
              <h3>Series</h3>
              {series.results.map((el) => (
                <div>
                  <p>{el.name}</p>
                  <img src={el.background_image} alt="background-image" />
                </div>
              ))}
            </div>
            <div>
              <h3>
                {achievements.results.map((el) => (
                  <div>
                    <p>{el.name}</p>
                    <p>{el.description}</p>
                    <img src={el.image} alt="achievment image" />
                  </div>
                ))}
              </h3>
            </div>
            <Stores>
              <h3>Where u can buy it?</h3>
              {game.stores.map((el) => (
                <div>
                  <p>{el.store.name}</p>
                  <img src={el.store.image_background} alt="store photo" />
                </div>
              ))}
            </Stores>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  border-radius: 1rem;
  padding: 0 1rem;
  background: white;
  position: absolute;

  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    width: 100%;
    font-size: 1rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const GameName = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const Stores = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default GameDetail;
