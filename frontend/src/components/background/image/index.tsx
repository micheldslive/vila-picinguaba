import { useEffect, useRef } from 'react'
import { gsapFadeTop } from '@/utils/gsapEffect'
import { BorderBrushTop } from '@/assets/styles/borders'
import { ImageBgTopProps } from '@/core/types'
import * as S from './styles'

const ImageBgTop = ({ background, title }: ImageBgTopProps) => {
  const animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeTop(animate.current)
  })

  return (
    <>
      <S.ImageContainer background={background} ref={animate} aria-label="image-container">
        <S.ImageContent>
          <S.ImageTitle>{title}</S.ImageTitle>
        </S.ImageContent>
      </S.ImageContainer>
      <BorderBrushTop />
    </>
  )
}

export default ImageBgTop
