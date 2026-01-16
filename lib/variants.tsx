export const fadeIn = (direction: string, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};
