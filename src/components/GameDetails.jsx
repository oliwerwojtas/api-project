import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Platform from "./Platforms";
import Stars from "./Stars";
import Stores from "./Stores";
import Achievements from "./Achievements";
import Series from "./Series";
import Genres from "./Genres";
import Ratings from "./Ratings";
import Gallery from "./Gallery";
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

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={closeDetailHandler}>
          <Detail layoutId={`container ${pathId}`}>
            <Stats>
              <GameName>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
              </GameName>
              {/* <Ratings> */}
              <div>
                <p>Rating: {game.rating}</p>
                <Stars rating={game.rating} />
              </div>
              <Ratings game={game} />
              {/* </Ratings> */}
            </Stats>
            <Info>
              <h3>Platforms</h3>

              <Platform platforms={game.platforms} />
            </Info>

            <div>
              <h3>Website</h3>
              <a href={game.website}>{game.website}</a>
            </div>

            <Genres game={game} />

            <Media>
              <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="image" />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery screen={screen} />

            <Series series={series} />

            <Achievements achievements={achievements} />

            <Stores game={game} />
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
  // display: flex;
  justify-content: center;
  align-items: center;
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
  width: 40%;
  border-radius: 1rem;
  padding: 0 1rem;
  background: white;
  position: absolute;
  overflow-y: scroll;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    
    
      width: 70%; 
    
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

// const Ratings = styled(motion.div)`
//   display: flex;
// `;
export default GameDetail;
