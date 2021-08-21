import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { colors } from '../styles'
import { getDailyBias } from '../utils/dataHelpers'

const dailyBias = getDailyBias()

const StyledLink = styled(Link)`
  color: ${colors.darkGray};
`

const homeCards = [
  {
    color: colors.pinkLight,
    colorDark: colors.pink,
    gridArea: '2 / 1 / 11 / 9',
    alignContent: 'center',
    delay: 0.4,
    x: -400,
    y: -0,
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
  {
    color: colors.yellowLight,
    colorDark: colors.yellow,
    gridArea: '1 / 11 / 5 / 25',
    alignContent: 'start',
    delay: 1.2,
    x: 100,
    y: -400,
    title: `Daily bias: ${dailyBias.cognitiveBias}`,
    paragraph: dailyBias.definition,
  },
  {
    color: colors.blueLight,
    colorDark: colors.blue,
    gridArea: '8 / 10 / 13 / 17',
    alignContent: 'end',
    delay: 2,
    x: 0,
    y: 250,
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
  {
    color: colors.greenLight,
    colorDark: colors.green,
    gridArea: '6 / 18 / 10 / 24',
    alignContent: 'start',
    delay: 3,
    x: 370,
    y: -0,
    title: 'Test your knowledge',
    paragraph: () => (
      <>
        Are you ready to see how much you know already about cognitive biases?{' '}
        <StyledLink to="/quiz">Take a Quiz!</StyledLink>
      </>
    ),
  },
]

export default homeCards
