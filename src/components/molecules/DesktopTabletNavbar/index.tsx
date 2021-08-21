import { AnimateSharedLayout } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import {
  List,
  ListItem,
  Navbar,
  NavbarContainer,
  Pill,
  StyledLink,
} from './styles'
import { colors } from '../../../styles'
import { pillSpring } from '../../../styles/animations'
import { TitleLogo } from '../../atoms'

export const links = [
  { label: 'Home', to: '/' },
  { label: 'Explorer', to: '/explorer' },
  { label: 'Quiz', to: '/quiz' },
]

const pills = [
  { color: colors.blue, top: -11, left: -18, delay: 0.1 },
  { color: colors.pink, top: 19, right: -8, delay: 0.3 },
  { color: colors.yellow, top: 27, left: -8, delay: 0.16 },
  { color: colors.green, top: -4, right: -18, delay: 0.24 },
]

const DesktopTabletNavBar = () => {
  let location = useLocation()
  return (
    <NavbarContainer>
      <Navbar>
        <TitleLogo />
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
