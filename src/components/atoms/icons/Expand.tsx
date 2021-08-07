import { colors } from '../../../styles'

const ExpandIcon = ({ height = 14 }) => {
  return (
    <svg viewBox="225.508 100.963 20 20" height={height}>
      <g
        transform="matrix(1, 0, 0, 1, 223.508499, 98.96344)"
        fill={colors.darkGray}
      >
        <path d="M10.71,13.29a1,1,0,0,1,0,1.42L5.41,20H8a1,1,0,0,1,0,2H3a1,1,0,0,1-1-1V16a1,1,0,0,1,2,0v2.59l5.29-5.3A1,1,0,0,1,10.71,13.29ZM21,2H16a1,1,0,0,0,0,2h2.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V8a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Z" />
      </g>
    </svg>
  )
}

export default ExpandIcon
