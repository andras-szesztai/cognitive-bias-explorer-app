import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const SmallCard = () => {
  return <Container>Card</Container>
}

const Container = styled(motion.div)`
  width: 180px;
  height: 100px;
  background-color: gray;
`

export default SmallCard
