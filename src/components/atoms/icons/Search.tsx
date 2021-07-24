import { colors } from '../../../styles'

const SearchIcon = ({ height = 16 }) => {
  return (
    <svg viewBox="143.665 822.004 19.609 19.605" height={height}>
      <g
        stroke="none"
        strokeWidth="1"
        transform="matrix(1, 0, 0, 1, 142.493927, 820.832581)"
      >
        <path
          fill={colors.darkGray}
          d="M15.4917684,14.0775548 L20.4885358,19.0743222 C20.8772627,19.4630492 20.8785283,20.0920344 20.4852814,20.4852814 C20.0947571,20.8758057 19.4559712,20.8701848 19.0743222,20.4885358 L14.0775548,15.4917684 C10.9391253,17.9342662 6.39944393,17.7131524 3.51471863,14.8284271 C0.390524292,11.7042328 0.390524292,6.63891296 3.51471863,3.51471863 C6.63891296,0.390524292 11.7042328,0.390524292 14.8284271,3.51471863 C17.7131524,6.39944393 17.9342662,10.9391253 15.4917684,14.0775548 L15.4917684,14.0775548 Z M13.4142136,13.4142136 C15.7573593,11.0710678 15.7573593,7.27207794 13.4142136,4.92893219 C11.0710678,2.58578644 7.27207794,2.58578644 4.92893219,4.92893219 C2.58578644,7.27207794 2.58578644,11.0710678 4.92893219,13.4142136 C7.27207794,15.7573593 11.0710678,15.7573593 13.4142136,13.4142136 Z"
        />
      </g>
    </svg>
  )
}

export default SearchIcon