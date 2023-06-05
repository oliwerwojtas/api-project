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
    border-radius: 0.5rem;
    padding: 0.2rem;
    background-color: ${(props) => (props.active ? "gray" : "transparent")};
    p {
      color: ${(props) => (props.active ? "white" : "black")};
    }
  `;
  const AccordianDescription = styled(motion.div)`
    margin-top: 1rem;
  `;
  const AccordianContent = styled(motion.div)`
    overflow: hidden;
  `;

  const Genre = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  `;
  const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1rem;
    }
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

    span {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
  `;

  const StarsContainer = styled(motion.div)`
    display: flex;
    img {
      width: 1.7rem;
      height: 1.7rem;
    }

    @media screen and (max-width: 550px) {
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
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
