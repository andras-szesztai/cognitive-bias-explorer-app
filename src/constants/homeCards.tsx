import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { colors } from '../styles'
import { getRandomBias } from '../utils/dataHelpers'

const randomBias = getRandomBias()

const StyledLink = styled(Link)`
  color: ${colors.darkGray};
`

export const homeCardsShared = {
  pink: {
    color: colors.pinkLight,
    colorDark: colors.pink,
    title: 'Welcome to the Cognitive Bias Explorer!',
    subtitle: 'What is a cognitive bias?',
    paragraph: () => (
      <>
        It is systematic pattern of deviation from norm or rationality in
        judgment. Individuals create their own "subjective reality" from their
        perception of the input, their construction of reality, not the
        objective input, may dictate their behavior in the world. Thus,
        cognitive biases may sometimes lead to perceptual distortion, inaccurate
        judgment, illogical interpretation, or what is broadly called
        irrationality. The biases on this site, together with their definitions,
        come directly from the{' '}
        <a
          href="https://commons.wikimedia.org/wiki/File:Cognitive_Bias_Codex_With_Definitions,_an_Extension_of_the_work_of_John_Manoogian_by_Brian_Morrissette.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Cognitive Bias Codex
        </a>
        .{' '}
      </>
    ),
  },
  yellow: {
    color: colors.yellowLight,
    colorDark: colors.yellow,
    title: `Random bias: ${randomBias.cognitiveBias}`,
    paragraph: randomBias.definition,
  },
  blue: {
    color: colors.blueLight,
    colorDark: colors.blue,
    title: 'Explore all',
    paragraph: () => (
      <>
        There is over 170 cognitive biases that we have collected for you to
        browse amongst. Are you interested to see their definitions and
        categories? Please{' '}
        <StyledLink to="/explorer">visit the Explorer page</StyledLink> to find
        out more!
      </>
    ),
  },
  green: {
    color: colors.greenLight,
    colorDark: colors.green,
    title: 'Test your knowledge',
    paragraph: () => (
      <>
        Are you ready to see how much you know already about cognitive biases?{' '}
        <StyledLink to="/quiz">Take a Quiz!</StyledLink>
      </>
    ),
  },
}

export const homeCardsDesktop = [
  {
    gridArea: '2 / 1 / 11 / 9',
    alignContent: 'center',
    delay: 0.4,
    x: -400,
    ...homeCardsShared.pink,
  },
  {
    gridArea: '1 / 11 / 5 / 25',
    alignContent: 'start',
    delay: 0.8,
    y: -400,
    ...homeCardsShared.yellow,
  },
  {
    gridArea: '8 / 10 / 13 / 17',
    alignContent: 'end',
    delay: 1.4,
    y: 250,
    ...homeCardsShared.blue,
  },
  {
    gridArea: '6 / 18 / 10 / 24',
    alignContent: 'start',
    delay: 2,
    x: 370,
    ...homeCardsShared.green,
  },
]
