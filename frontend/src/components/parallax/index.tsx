import { useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import * as S from '@/components/village/styles'
import { ParallaxProps } from '@/core/types'

export const VillageParallax = ({
  id,
  background,
  waveBackground,
  waveColor,
  backgroundColor,
  title,
  description,
}: ParallaxProps) => {
  const animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <>
      <S.VillageParallaxBG
        gradient={id === 1 ? true : false}
        background={background}
        aria-label='parallax-bg'
      />
      <S.VillageParallaxBorder
        waveBackground={waveBackground}
        waveColor={waveColor}
        aria-label='parallax-wave'
      />
      <S.VillageParallaxContainer backgroundColor={backgroundColor}>
        <S.VillageParallaxContent ref={animate}>
          <S.VillageParallaxTitle aria-label='parallax-title'>
            {title}
          </S.VillageParallaxTitle>
          <S.VillageParallaxDescription aria-label='parallax-description'>
            {description}
          </S.VillageParallaxDescription>
        </S.VillageParallaxContent>
      </S.VillageParallaxContainer>
    </>
  )
}
