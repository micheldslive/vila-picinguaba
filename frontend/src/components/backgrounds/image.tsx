import { useEffect, useRef } from 'react'
import { gsapFadeTop } from '@/utils/gsapEffect'
import { BorderBrushTop } from '@/assets/styles/borders'
import { ImageBgTopProps } from '@/core/types'
import { ImageContainer, ImageContent, ImageTitle } from './styles'

const ImageBgTop = ({ background, title }: ImageBgTopProps) => {
  const animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeTop(animate.current)
  })

  return (
    <>
      <ImageContainer background={background} ref={animate}>
        <ImageContent>
          <ImageTitle>{title}</ImageTitle>
        </ImageContent>
      </ImageContainer>
      <BorderBrushTop />
    </>
  )
}

export default ImageBgTop
