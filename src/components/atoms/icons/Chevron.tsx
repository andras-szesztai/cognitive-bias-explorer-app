import { colors } from '../../../styles'

const ChevronIcon = ({ height = 8, fill = colors.darkGray }) => {
  return (
    <svg viewBox="26.5 36.5 47 27" height={height}>
      <g stroke="none" fill={fill} strokeWidth="1" fillRule="evenodd">
        <path
          d="M67.5251263,62.4748737 C68.8919613,63.8417088 71.1080387,63.8417088 72.4748737,62.4748737 C73.8417088,61.1080387 73.8417088,58.8919613 72.4748737,57.5251263 L52.4748737,37.5251263 C51.1080387,36.1582912 48.8919613,36.1582912 47.5251263,37.5251263 L27.5251263,57.5251263 C26.1582912,58.8919613 26.1582912,61.1080387 27.5251263,62.4748737 C28.8919613,63.8417088 31.1080387,63.8417088 32.4748737,62.4748737 L50.0095722,44.9401752 L67.5251263,62.4748737 Z"
          transform="translate(50.000000, 50.000000) rotate(180.000000) translate(-50.000000, -50.000000) "
        />
      </g>
    </svg>
  )
}

export default ChevronIcon
