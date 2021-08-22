import { AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import { links } from '../DesktopTabletNavbar'

import { List, Navbar, NavbarContainer, Pill } from './styles'
import { ListItem, StyledLink } from '../DesktopTabletNavbar/styles'
import { colors } from '../../../styles'
import { pillSpring } from '../../../styles/animations'

const pills = [
  { color: colors.blue, top: 0, left: -12, delay: 0.1 },
  { color: colors.pink, top: 26, right: 4, delay: 0.3 },
  { color: colors.yellow, top: 31, left: -6, delay: 0.16 },
  { color: colors.green, top: 6, right: -12, delay: 0.24 },
]

const MobileNavbar = () => {
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

export default MobileNavbar
