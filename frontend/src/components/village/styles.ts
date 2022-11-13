import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { VillageProps } from '@/core/types'
import VillageImageJPG from '@/assets/images/home/pescador-rede.jpg'

export { VillageImageJPG }

export const Container = styled.section``

export const HomeRow = styled(Row)`
  padding: 0 24px;
  align-items: center;
`

export const HomeCol = styled(Col)`
  padding: 0;
  margin-bottom: 35px;
`

// Village - COMPONENT HOME PAGE

export const VillageContent = styled.div`
  padding: 8em 0;
  background-color: var(--darkBlue);
`

export const VillageRow = styled(Row)``

export const VillageCol = styled(Col)`
  padding: 0;
  margin-bottom: 35px;
  padding: 0 35px;

  @media (max-width: 1180px) {
    padding: 0 15px;
  }
`

export const VillageDescription = styled.p`
  padding-top: 15px;
  color: var(--gray2);
  line-height: 22px;
`

export const VillageImageContent = styled.div`
  position: relative;
`

export const VillageImage = styled.img`
  border-radius: 20px;
  width: 100%;
  filter: drop-shadow(6px 4px 20px rgba(0, 0, 0, 0.46));
`

export const VillageTitleContent = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const VillageTitle = styled.h1`
  color: white;
  font-family: 'Staatliches', cursive;
  font-size: 80px;
  font-weight: 100;
  line-height: 80px;
  transition: 300ms;

  @media (max-width: 500px) {
    font-size: 50px;
    line-height: 50px;
  }
`

export const VillageParallaxBG = styled.div<VillageProps>`
  height: ${({ gradient }) => (gradient ? '650px' : '500px')};
  width: 100%;
  background: url(${({ background }) => (background ? background : '')});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;

  ${({ gradient }) =>
    gradient &&
    `
      &::after {
        content: "";
        position: absolute;
        top: 0;
        background: linear-gradient(
          180deg,
          rgba(19, 55, 84, 1) -1%,
          rgba(19, 55, 84, 0) 100%
        );
        width: 100%;
        height: 300px;
        margin-top: -1px;
      }
  `}
`

export const VillageParallaxBorder = styled.div<VillageProps>`
  height: 70px;
  background: url(${({ waveBackground }) => (waveBackground ? waveBackground : '')})
    ${({ waveColor }) => (waveColor ? waveColor : '')};
  background-size: cover;
  background-position: center;
`

export const VillageParallaxContainer = styled.div<VillageProps>`
  background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '')};
`

export const VillageParallaxContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4em 20px;
  text-align: center;
  color: white;
`

export const VillageParallaxTitle = styled.h1`
  font-family: 'Staatliches', cursive;
  font-size: 50px;
  font-weight: 100;
  line-height: 80px;
  transition: 300ms;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`

export const VillageParallaxDescription = styled.p`
  font-size: 20px;
  font-weight: 600;
`

export const VillageParallaxEnd = styled.div`
  height: 130px;
  margin-bottom: -130px;
  width: 100%;
  background-color: var(--green1);
`
