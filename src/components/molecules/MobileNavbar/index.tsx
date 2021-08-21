import { AnimateSharedLayout } from 'framer-motion'

import { colors } from '../../../styles'
import { pillSpring } from '../../../styles/animations'
import { useLocation } from 'react-router-dom'
import { List, Navbar, NavbarContainer, Pill } from './styles'
import { ListItem, StyledLink } from '../DesktopTabletNavbar/styles'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Explorer', to: '/explorer' },
  { label: 'Quiz', to: '/quiz' },
]

const pills = [
  { color: colors.blue, top: -9, left: -11, delay: 0.1 },
  { color: colors.pink, top: 17, right: -6, delay: 0.3 },
  { color: colors.yellow, top: 24, left: -6, delay: 0.16 },
  { color: colors.green, top: -4, right: -12, delay: 0.24 },
]

const DesktopTabletNavBar = () => {
  let location = useLocation()
  return (
    <NavbarContainer>
      <Navbar>
        <AnimateSharedLayout>
          <List>
            {links.map(({ to, label }) => (
              <ListItem key={to}>
                <StyledLink to={to}>
                  {label}
                  {location.pathname === to &&
                    pills.map((pill) => (
                      <Pill
                        key={pill.color}
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
    </NavbarContainer>
  )
}

export default DesktopTabletNavBar
