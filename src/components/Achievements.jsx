import styled from "styled-components";
import { motion } from "framer-motion";
const Stores = ({ achievements }) => {
  return (
    <AchievementsContainer>
      <h3>Achievements</h3>
      {achievements.results.map((achievement) => (
        <div>
          <p>{achievement.name}</p>
          <p>{achievement.description}</p>
          <img src={achievement.image} alt="achievement background" />
        </div>
      ))}
    </AchievementsContainer>
  );
};
const AchievementsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
export default Stores;
