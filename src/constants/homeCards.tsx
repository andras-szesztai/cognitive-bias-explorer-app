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
    colorLight: colors.pinkLight,
    color: colors.pink,
    title: 'Welcome to the Cognitive Bias Explorer!',
    subtitle: 'What is a cognitive bias?',
    paragraph: () => (
      <>
        It is systematic pattern of deviation from norm or rationality in
        judgment. Individuals create their own subjective reality from their
        perception of the input, then it this "reality", not the objective
        input, that may dictate their behavior in the world. Thus, cognitive
        biases can oftentimes lead to perceptual distortion, inaccurate
        judgment, illogical interpretation, or what is broadly called
        irrationality. The biases you can discover on this site, together with
        their definitions, come directly from the{' '}
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
    colorLight: colors.yellowLight,
    color: colors.yellow,
    title: `Random bias: ${randomBias.cognitiveBias}`,
    paragraph: randomBias.definition,
  },
  blue: {
    colorLight: colors.blueLight,
    color: colors.blue,
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
    colorLight: colors.greenLight,
    color: colors.green,
    title: 'Test your knowledge',
    paragraph: () => (
      <>
        Are you ready to see how much you know already about cognitive biases?{' '}
        <StyledLink to="/quiz">Take a Quiz!</StyledLink>
      </>
    ),
  },
  white: {
    colorLight: colors.white,
    color: colors.lightGray,
    title: 'About',
    paragraph: () => (
      <>
        Designed & built by{' '}
        <a
          href="https://www.linkedin.com/in/andr%C3%A1s-szesztai-351a4379/"
          target="_blank"
          rel="noreferrer"
        >
          András Szesztai
        </a>
      </>
    ),
  },
}

export const homeCardsDesktop = [
  {
    gridArea: '1 / 1 / 12 / 9',
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
    alignContent: 'start',
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
  {
    gridArea: '10 / 18 / 16 / 25',
    alignContent: 'end',
    delay: 3,
    x: 100,
    ...homeCardsShared.white,
  },
]
