import styled from "styled-components";
import { motion } from "framer-motion";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const Platform = ({ platforms }) => {
  const getPlatform = (platform) => {
    switch (platform) {
      case "Playstation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <Platforms>
      {platforms.map((data) => (
        <img
          alt={data.platform.name}
          key={data.platform.id}
          src={getPlatform(data.platform.name)}
        ></img>
      ))}
    </Platforms>
  );
};

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
export default Platform;
