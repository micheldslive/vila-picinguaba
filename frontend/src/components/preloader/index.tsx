import { memo } from 'react'
import { PreloaderMain, PreloaderContainer, PicinguabaSun } from './styles'

const Preloader = () => {
  return (
    <PreloaderContainer aria-label='preloader'>
      <PreloaderMain>
        <PicinguabaSun width='156' height='85' />
      </PreloaderMain>
    </PreloaderContainer>
  )
}

export default memo(Preloader)
