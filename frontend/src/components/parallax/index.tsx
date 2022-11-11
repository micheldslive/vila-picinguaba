import { useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import * as S from '@/components/village/styles'
import { ParallaxProps } from '@/core/types'

export const VillageParallax = ({
  id,
  bg,
  bdBg,
  bdColor,
  bgColor,
  title,
  desc,
}: ParallaxProps) => {
  const animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <>
      <S.VillageParallaxBG gradient={id === 1 ? true : false} bg={bg} />
      <S.VillageParallaxBorder bdBg={bdBg} bdColor={bdColor} />
      <S.VillageParallaxContainer bgColor={bgColor}>
        <S.VillageParallaxContent ref={animate}>
          <S.VillageParallaxTitle>{title}</S.VillageParallaxTitle>
          <S.VillageParallaxDescription>{desc}</S.VillageParallaxDescription>
        </S.VillageParallaxContent>
      </S.VillageParallaxContainer>
    </>
  )
}
