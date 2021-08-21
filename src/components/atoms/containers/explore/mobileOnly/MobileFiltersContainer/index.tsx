import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { heights } from '../../../../../../constants/dimensions'
import { colors } from '../../../../../../styles'

const MobileFiltersContainer = styled(motion.div)`
  position: fixed;
  bottom: ${heights.navbarMobile}px;
  left: 0px;
  width: 100vw;
  padding: 8px 16px 16px 16px;
  background-color: ${colors.white};
  box-shadow: 0px -2px 5px ${colors.darkGrayOpaque},
    0px -4px 10px ${colors.darkGrayOpaque};

  border-radius: 4px 4px 0px 0px;

  display: grid;
`

export default MobileFiltersContainer
