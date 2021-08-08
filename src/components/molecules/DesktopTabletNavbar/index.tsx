import { AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'

import { List, ListItem, Navbar, Pill, StyledLink } from './styles'
import { colors } from '../../../styles'
import { pillSpring } from '../../../styles/animations'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Explorer', to: '/explorer' },
  { label: 'Quiz', to: '/quiz' },
]

const pills = [
  { color: colors.blue, top: -8, left: -16, delay: 0.1 },
  { color: colors.pink, top: 18, left: 30, delay: 0.3 },
  { color: colors.yellow, top: 24, left: -7, delay: 0.16 },
  { color: colors.green, top: -2, left: 40, delay: 0.24 },
]

const DesktopTabletNavBar = () => {
  const [selected, setSelected] = useState('/')
  return (
    <Navbar>
      <span>Logo</span>
      <AnimateSharedLayout>
        <List>
          {links.map(({ to, label }) => (
            <ListItem>
              <StyledLink onClick={() => setSelected(to)} to={to}>
                {label}
                {selected === to &&
                  pills.map((pill) => (
                    <Pill
                      {...pill}
                      layoutId={`pill-${pill.color}`}
                      transition={{ ...pillSpring, delay: pill.delay }}
                    />
                  ))}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </AnimateSharedLayout>
    </Navbar>
  )
}

export default DesktopTabletNavBar
