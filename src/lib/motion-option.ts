const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

export const menuVariants = {
  hidden: { scale: 0, opacity: 0, y: -20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    scale: 0,
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const menuSlide = {
  initial: { scale: 0 },

  enter: {
    scale: 1,
    transition: { duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] },
  },

  exit: {
    scale: 0,
    transition: { duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] },
  },
}

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
}

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
}

export const background = {
  initial: {
    height: 0,
  },
  open: {
    height: '100vh',
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
}

export const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
    x: '10px',
  },
  open: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
    x: '10px',
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
    x: '0px',
  },
}

export const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: any) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}
