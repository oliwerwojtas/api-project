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

  const { screen, game, series, achievements, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={closeDetailHandler}>
          <Detail layoutId={`container ${pathId}`}>
            <div className="w-full">
              <Stats>
                <GameName>
                  <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                  <Stars rating={game.rating} />
                </GameName>
                <Rating>
                  <Ratings game={game} />
                </Rating>
              </Stats>
              <Info>
                <span>Platforms</span>

                <Platform platforms={game.platforms} />
              </Info>

              <div>
                <span>Website</span>
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
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #181c21;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  max-width: 40%;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background: white;
  position: absolute;
  left: 30%;
  color: black;
  background-color: white;
  z-index: 10;
  img {
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    max-width: 60%;
    left: 20%;
    font-size: 0.8rem;
    padding: 1rem;
  }

  @media screen and (max-width: 800px) {
    max-width: 70%;
    left: 15%;
    font-size: 0.8rem;
    padding: 1rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 330px;
    left: 7%;
    font-size: 0.8rem;
    padding: 1rem;
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
    width: 1.2rem;
    height: 1.2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 400px) {
    display: flex;
  }
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
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.8rem;

  img {
    width: 10px;
  }
  h3 {
    font-size: 1rem;
    font-weight: bold;
    width: 50%;
    text-align: left;
  }
`;

const Rating = styled(motion.div)`
  display: flex;
  width: 100%;
`;
export default GameDetail;
