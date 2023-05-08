import { useState } from "react";
import { collapse } from "../../animations";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useComponentStyles } from "../../hooks/useComponentStyles";

const Achievements = ({ achievements }) => {
  const { Container, Accordian, AccordianName, AccordianDescription, AccordianContent } =
    useComponentStyles();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container>
      <h3>Achievements</h3>
      {achievements.results.map((achievement, index) => (
        <Accordian key={index}>
          <AccordianName active={activeIndex === index} onClick={() => handleClick(index)}>
            {achievement.name}
            <span>{activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}</span>
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
      ))}
    </Container>
  );
};

export default Achievements;
