import { isBoolean, isString } from 'lodash'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { paddings } from '../../../constants/dimensions'

import { cardSpring } from '../../../styles'
import {
  CardContainer,
  GridContainer,
  TitleContainer,
  Title,
  SubTitle,
  ParagraphContainer,
  Paragraph,
} from './styles'

export interface IProps {
  gridArea: string
  alignContent: string
  color: string
  colorDark: string
  x: number
  y: number
  delay: number
  isFirstRender: boolean
  onFirstRender: (() => void) | boolean
  title: string
  subtitle?: string
  paragraph: (() => React.ReactNode) | string
}

const heightAdjust = 12

const HomeBigCard = ({
  gridArea,
  alignContent,
  color,
  colorDark,
  x,
  y,
  delay,
  isFirstRender,
  onFirstRender,
  title,
  subtitle,
  paragraph,
}: IProps) => {
  const [containerRef, { height: containerHeight }] = useMeasure()
  const [titleRef, { height: titleHeight }] = useMeasure()
  const [paragraphHeight, setParagraphHeight] = useState(0)
  useEffect(() => {
    if (!paragraphHeight && !!titleHeight && !!containerHeight) {
      setParagraphHeight(
        containerHeight -
          2 * paddings.cardPadding -
          titleHeight -
          (subtitle ? heightAdjust * 2 : heightAdjust)
      )
    }
  }, [paragraphHeight, titleHeight, containerHeight, subtitle])

  return (
    <GridContainer
      ref={containerRef}
      gridArea={gridArea}
      alignContent={alignContent}
      initial={{
        x: isFirstRender ? x : 0,
        y: isFirstRender ? y : 0,
        opacity: isFirstRender ? 0 : 1,
      }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ ...cardSpring, delay }}
      onAnimationComplete={() => !isBoolean(onFirstRender) && onFirstRender()}
    >
      <CardContainer color={color} withSubtitle={!!subtitle}>
        <TitleContainer ref={titleRef} colorDark={colorDark}>
          <Title>{title}</Title>
        </TitleContainer>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <ParagraphContainer maxHeight={paragraphHeight}>
          {paragraphHeight && (
            <Paragraph>
              {isString(paragraph) ? paragraph : paragraph()}
            </Paragraph>
          )}
        </ParagraphContainer>
      </CardContainer>
    </GridContainer>
  )
}

export default HomeBigCard
