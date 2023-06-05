import { useState } from "react";
import { useComponentStyles } from "../../hooks/useComponentStyles";
//utilities
import { collapse } from "../../animations";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Achievements = ({ achievements }) => {
  const { Container, Accordian, AccordianName, AccordianDescription, AccordianContent } =
    useComponentStyles();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container>
      <span>Achievements</span>
      {achievements && achievements.results.length > 0 ? (
        achievements.results.map((achievement, index) => (
          <Accordian key={index}>
            <AccordianName active={activeIndex === index} onClick={() => handleClick(index)}>
              <p>{achievement.name}</p>
              <p>{activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}</p>
            </AccordianName>
            <AccordianContent
              variants={collapse}
              initial="hidden"
              animate={activeIndex === index ? "show" : "hidden"}
            >
              <AccordianDescription>{achievement.description}</AccordianDescription>
              <img src={achievement.image} alt="achievement background" />
            </AccordianContent>
          </Accordian>
        ))
      ) : (
        <p>No data!</p>
      )}
    </Container>
  );
};

export default Achievements;
