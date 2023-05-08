import Chart from "react-apexcharts";
import { useComponentStyles } from "../../hooks/useComponentStyles";

const Ratings = ({ game }) => {
  const { RatingsContainer } = useComponentStyles();
  const chartData = {
    options: {
      xaxis: {
        categories: game.ratings.map((el) => el.title),
      },
      colors: ["#2E8B57"], // ustawienie koloru linii
      chart: {
        background: "#222", // ustawienie koloru tła
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

export default Ratings;
