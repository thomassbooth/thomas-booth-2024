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
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1]},
  },
  closed: {
    height: "0vh",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
};

export const pageLink = {
  initial: { y: '100%'},
  closed: (i: number) => ({ y: '100%', transition: { delay: 0.5 + (0.2 * (4-(i+1))), duration: 0.5, easing: 'easeIn'} }),
  open: (i: number) => ({ y: 0, transition: { delay: 1 + (0.2 * i), duration: 0.5, easing: 'easeIn'} }),
}

export const linkBorder = {
  initial: { width: 0},
  closed: (i: number) => ({ width: 0, transition: { delay: (0.2 * (4-(i+1))), duration: 1, easing: 'easeIn'}}),
  open: (i: number) => ({ width: '100%', transition: { delay: 0.5 + (0.2 * i), duration: 1, easing: 'easeIn'} }),
}

export const content = {
  scale: { scale: 1, opacity: 1 },
  none: { scale: 0, opacity: 0 },
};
