import styled from "styled-components";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

const Ratings = ({ game }) => {
  const chartData = {
    options: {
      xaxis: {
        categories: game.ratings.map((el) => el.title),
      },
    },
    series: [
      {
        name: "Count",
        data: game.ratings.map((el) => el.count),
      },
    ],
  };

  return (
    <RatingsContainer key={game.id}>
      <h3>Ratings:</h3>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </RatingsContainer>
  );
};

const RatingsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    padding: 0;
  }
`;

export default Ratings;
