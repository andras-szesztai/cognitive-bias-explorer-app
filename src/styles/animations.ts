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
