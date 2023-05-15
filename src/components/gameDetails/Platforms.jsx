import playstation from "../../assets/playstation.svg";
import steam from "../../assets/steam.svg";
import xbox from "../../assets/xbox.svg";
import nintendo from "../../assets/nintendo.svg";
import apple from "../../assets/apple.svg";
import gamepad from "../../assets/gamepad.svg";

import { useComponentStyles } from "../../hooks/useComponentStyles";
const Platform = ({ platforms }) => {
  const { Platforms } = useComponentStyles();

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
      case "macOS":
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

export default Platform;
