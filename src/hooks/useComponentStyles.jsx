import styled from "styled-components";
import { motion } from "framer-motion";

export const useComponentStyles = () => {
  const Accordian = styled(motion.div)`
    margin-bottom: 1rem;
  `;

  const AccordianName = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid black;
    background-color: ${(props) => (props.active ? "#CCC" : "transparent")};
  `;
  const AccordianDescription = styled(motion.div)`
    margin-top: 1rem;
  `;
  const AccordianContent = styled(motion.div)`
    overflow: hidden;
  `;

  const Genre = styled(motion.div)`
    display: flex;
  `;
  const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
  `;

  const Image = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    img {
      width: 100%;
      max-width: 400px;
    }
  `;

  const Platforms = styled(motion.div)`
    display: flex;

    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 2rem;
      height: 2rem;
    }
  `;

  const RatingsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      padding: 0;
    }
  `;

  const StarsContainer = styled(motion.div)`
    display: flex;
  `;
  return {
    RatingsContainer,
    StarsContainer,
    Container,
    Image,
    Genre,
    Platforms,
    Accordian,
    AccordianName,
    AccordianDescription,
    AccordianContent,
  };
};
