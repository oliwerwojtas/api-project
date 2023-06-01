import Chart from "react-apexcharts";
import { useComponentStyles } from "../../hooks/useComponentStyles";

const Ratings = ({ game }) => {
  const { RatingsContainer } = useComponentStyles();
  const chartData = {
    options: {
      labels: game.ratings.map((game) => game.title),
      chart: {
        background: "#222",
        color: "#111",
      },
    },
    series: game.ratings.map((game) => game.count),
  };

  return (
    <RatingsContainer key={game.id}>
      <span>Ratings:</span>
      <Chart options={chartData.options} series={chartData.series} type="donut" height={350} />
    </RatingsContainer>
  );
};

export default Ratings;
