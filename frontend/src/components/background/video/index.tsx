import { memo, useEffect, useRef } from 'react'
import { gsapFadeTop } from '@/utils/gsapEffect'
import VideoSRC from '@/assets/video/video-picinguaba.mp4'
import * as S from './styles'

export { VideoSRC }

const Video = () => {
  const animate = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    gsapFadeTop(animate.current)
  })

  return (
    <S.VideoContainer>
      <S.Title>
        <S.TitleContent>
          <S.Refuge />
        </S.TitleContent>
      </S.Title>
      <S.VideoContent>
        <S.VideoElement
          ref={animate}
          src={VideoSRC}
          autoPlay
          muted
          loop
          data-object-fit='cover'
          aria-label='video-element'
        />
      </S.VideoContent>
    </S.VideoContainer>
  )
}

export default memo(Video)
