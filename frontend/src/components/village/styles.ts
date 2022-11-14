import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
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

export const VillageParallaxEnd = styled.div`
  height: 130px;
  margin-bottom: -130px;
  width: 100%;
  background-color: var(--green1);
`
