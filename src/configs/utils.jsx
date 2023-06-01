const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

export const getCurrentDate = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  return `${currentYear}-${currentMonth}-${currentDay}`;
};

export const getLastYearDate = () => {
  const currentYear = new Date().getFullYear() - 1;
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  return `${currentYear}-${currentMonth}-${currentDay}`;
};

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#181C21",
    borderRadius: "0.5rem",
    borderColor: "#202020",
    color: "white",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    background: state.isSelected ? "#151515" : "#2A303C",
    "&:hover": {
      background: "#373C49",
    },
  }),
};
