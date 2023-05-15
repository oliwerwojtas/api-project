import starEmpty from "../../assets/star-empty.png";
import starFull from "../../assets/star-full.png";
import { useComponentStyles } from "../../hooks/useComponentStyles";

const Stars = ({ rating }) => {
  const { StarsContainer } = useComponentStyles();
  const getStars = () => {
    const stars = [];
    const roundedRating = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  return <StarsContainer>{getStars()}</StarsContainer>;
};

export default Stars;
