import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { collapse } from "../animations";
const Achievements = ({ achievements }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <AchievementsContainer>
      <h3>Achievements</h3>
      {achievements.results.map((achievement, index) => (
        <Accordian key={index}>
          <Name active={activeIndex === index} onClick={() => handleClick(index)}>
            {achievement.name}
          </Name>
          <Content
            variants={collapse}
            initial="hidden"
            animate={activeIndex === index ? "show" : "hidden"}
          >
            <Description>{achievement.description}</Description>
            <img src={achievement.image} alt="achievement background" />
          </Content>
        </Accordian>
      ))}
    </AchievementsContainer>
  );
};

const AchievementsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Accordian = styled(motion.div)`
  margin-bottom: 1rem;
`;

const Name = styled(motion.div)`
  cursor: pointer;
  border: 1px solid black;
  background-color: ${(props) => (props.active ? "#CCC" : "transparent")};
`;
const Description = styled(motion.div)`
  margin-top: 1rem;
`;
const Content = styled(motion.div)`
  overflow: hidden;
`;

export default Achievements;
