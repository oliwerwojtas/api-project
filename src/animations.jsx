export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};
export const collapse = {
  hidden: {
    height: 0,
  },
  show: {
    height: "auto",
    transition: {
      duration: 0.5,
    },
  },
};
