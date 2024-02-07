export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "100vh",
  },
  exit: {
    height: 0,
  },
};

export const menu = {
  initial: {
    height: "0vh",
  },
  open: {
    height: "100vh",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: "0vh",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};

export const content = {
  scale: { scale: 1, opacity: 1 },
  none: { scale: 0, opacity: 0 },
};
