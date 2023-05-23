import Chart from "react-apexcharts";
import { useComponentStyles } from "../../hooks/useComponentStyles";

const Ratings = ({ game }) => {
  const { RatingsContainer } = useComponentStyles();
  const chartData = {
    options: {
      labels: game.ratings.map((el) => el.title),
      chart: {
        background: "#222",
      },
      colors: ["#2E8B57", "#FFA07A", "#ADD8E6", "#FFD700"],
    },
    series: game.ratings.map((el) => el.count),
  };

  return (
    <RatingsContainer key={game.id}>
      <h3>Ratings:</h3>
      <Chart options={chartData.options} series={chartData.series} type="donut" height={350} />
    </RatingsContainer>
  );
};

export default Ratings;
