import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Texture } from '@/components/products/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const EventsContent = styled.div`
  padding: 3em 0 4em;
  background: url(${Texture});
  background-size: cover;
`

export const EventsContainer = styled.section`
  max-width: 900px;
`

export const EventRow = styled(Row)``

export const EventCol = styled(Col)``

export const EventLink = styled(Link)`
  &:hover > div {
    background-color: var(--gray);
    box-shadow: 3px 5px 17px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
`

export const EventCard = styled.div`
  transition: 300ms;
  border-radius: 15px;
  text-align: center;
  padding: 40px;
`

export const EventIMG = styled(LazyLoadImage)`
  padding-bottom: 15px;
`

export const EventTitle = styled.h1`
  text-transform: uppercase;
  font-family: 'Staatliches', cursive;
  font-size: 40px;
  font-weight: 100;
  color: var(--darkBlue);
`

export const EventDesc = styled.p``
