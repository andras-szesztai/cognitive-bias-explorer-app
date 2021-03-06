import { isString } from 'lodash'
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
  colorLight: string
  color: string
  paragraph: (() => React.ReactNode) | string
  isFirstRender?: boolean
  gridArea?: string
  alignContent?: string
  title?: string
  x?: number
  y?: number
  delay?: number
  subtitle?: string
  noMaxHeight?: boolean
}

const heightAdjust = 12

const HomeBigCard = ({
  gridArea,
  alignContent,
  colorLight,
  color,
  x = 0,
  y = 0,
  delay = 0,
  isFirstRender,
  title,
  subtitle,
  paragraph,
  noMaxHeight,
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
        opacity: 0,
      }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ ...cardSpring, delay: isFirstRender ? delay : 0 }}
    >
      <CardContainer colorLight={colorLight} withSubtitle={!!subtitle}>
        {title && (
          <TitleContainer ref={titleRef} color={color}>
            <Title>{title}</Title>
          </TitleContainer>
        )}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <ParagraphContainer
          maxHeight={paragraphHeight}
          noMaxHeight={noMaxHeight}
        >
          {!!paragraphHeight && (
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
