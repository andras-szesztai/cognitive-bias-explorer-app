import { colors } from '../../../../styles'
import { getDailyBias } from '../../../../utils/dataHelpers'

import {
  DesktopExploreMainContainer,
  DesktopHomeContentContainer,
  HomeBigCard,
} from '../../../atoms'

const dailyBias = getDailyBias()

const cards = [
  {
    color: colors.pinkLight,
    colorDark: colors.pink,
    gridArea: '2 / 1 / 11 / 9',
    delay: 0,
    x: -400,
    y: -0,
    title: 'Welcome to the Cognitive Bias Explorer',
    paragraph: () => (
      <>
        {' '}
        Inherent thinking "blind spots" that reduce thinking accuracy and result
        inaccurate, often irrational conclusions. Much like logical fallacies,
        they can be viewed as either as causes or effects but can generally be
        reduced to broken thinking. Some are so common that they are given names
        to easier identify, emphasize, analyze, and ultimately avoid. These
        biases and their definitions come directly from the{' '}
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
    gridArea: '1 / 11 / 6 / 25',
    delay: 0.3,
    x: 20,
    y: -100,
    title: `Daily bias: ${dailyBias.cognitiveBias}`,
    paragraph: dailyBias.definition,
  },
  {
    color: colors.blueLight,
    colorDark: colors.blue,
    gridArea: '8 / 10 / 13 / 17',
    delay: 0.6,
    x: 0,
    y: 250,
    title: 'Explore all',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sunt sint libero eos maiores odio at voluptas nulla ipsum exercitationem!',
  },
  {
    color: colors.greenLight,
    colorDark: colors.green,
    gridArea: '7 / 18 / 10 / 24',
    delay: 0.9,
    x: 370,
    y: -0,
    title: 'Test your knowledge',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fuga.',
  },
  {
    color: colors.white,
    colorDark: colors.white,
    gridArea: '11 / 19 / 13 / 25',
    delay: 1.5,
    x: 140,
    y: 140,
    title: 'About',
    paragraph: 'Who is behind?',
  },
]

interface IProps {
  onFirstRender: () => void
  isFirstRender: boolean
}

const DesktopTabletHomeView = ({ onFirstRender, isFirstRender }: IProps) => {
  return (
    <DesktopExploreMainContainer>
      <DesktopHomeContentContainer>
        {cards.map((card) => (
          <HomeBigCard
            key={card.color}
            {...card}
            isFirstRender={isFirstRender}
            onFirstRender={!!(card.color === colors.white) && onFirstRender}
          />
        ))}
      </DesktopHomeContentContainer>
    </DesktopExploreMainContainer>
  )
}

export default DesktopTabletHomeView
