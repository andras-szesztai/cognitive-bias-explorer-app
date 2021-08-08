export const durations = {
  sm: 0.2,
  md: 0.3,
  lg: 0.5,
  xl: 1,
}

export const getOpacityInOut = (duration = durations.sm) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: duration },
})

export const eases = {
  easeInOutCubic: [0.65, 0, 0.35, 1],
}

export const pillSpring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
