import { motion } from 'framer-motion'

import { colors } from '../../../styles'

type TSides = 'top' | 'left' | 'bottom' | 'right'

interface IProps {
  activeKeys?: Record<TSides, boolean>
  height?: number
}

const Keyboard = ({ activeKeys, height = 36 }: IProps) => {
  const getAnimationProps = (key: TSides) => ({
    initial: { fillOpacity: !activeKeys ? 1 : activeKeys?.[key] ? 1 : 0.15 },
    animate: {
      fillOpacity: !activeKeys ? 1 : activeKeys?.[key] ? 1 : 0.15,
    },
  })
  return (
    <svg viewBox="510.554 219.362 82.759 58.228" height={height}>
      <g
        transform="matrix(1.001117, 0, 0, 1, 501.892853, 202.0867)"
        fillRule="evenodd"
        fill={colors.darkGray}
      >
        <motion.path
          {...getAnimationProps('top')}
          d="M 58.44 17.275 L 41.56 17.275 C 38.456 17.275 35.94 19.791 35.94 22.895 L 35.94 39.765 C 35.94 42.87 38.455 45.389 41.56 45.395 L 58.44 45.395 C 61.545 45.389 64.06 42.87 64.06 39.765 L 64.06 22.895 C 64.06 19.791 61.544 17.275 58.44 17.275 Z M 44.38 39.765 L 50 31.335 L 55.62 39.765 L 44.38 39.765 Z"
        />
        <motion.path
          {...getAnimationProps('bottom')}
          d="M 58.44 47.383 L 41.56 47.383 C 38.455 47.389 35.94 49.908 35.94 53.013 L 35.94 69.883 C 35.94 72.987 38.456 75.503 41.56 75.503 L 58.44 75.503 C 61.544 75.503 64.06 72.987 64.06 69.883 L 64.06 53.013 C 64.06 49.908 61.546 47.389 58.44 47.383 Z M 50 64.253 L 44.38 55.823 L 55.62 55.823 L 50 64.253 Z"
        />
        <motion.path
          {...getAnimationProps('right')}
          d="M 85.694 47.383 L 71.65 47.383 C 68.545 47.383 66.026 49.904 66.026 53.013 L 66.026 69.883 C 66.032 72.989 68.549 75.503 71.65 75.503 L 85.694 75.503 C 88.799 75.509 91.318 72.991 91.318 69.883 L 91.318 53.013 C 91.318 49.904 88.801 47.383 85.694 47.383 Z M 71.65 64.253 L 71.65 53.013 L 80.071 58.633 L 71.65 64.253 Z"
        />
        <motion.path
          {...getAnimationProps('left')}
          d="M 28.319 47.383 L 14.274 47.383 C 11.169 47.383 8.651 49.904 8.651 53.013 L 8.651 69.883 C 8.651 72.987 11.164 75.503 14.264 75.503 L 28.319 75.503 C 31.421 75.503 33.937 72.989 33.942 69.883 L 33.942 53.013 C 33.942 49.904 31.425 47.383 28.319 47.383 Z M 28.319 64.253 L 19.898 58.633 L 28.319 53.013 L 28.319 64.253 Z"
        />
      </g>
    </svg>
  )
}

export default Keyboard
