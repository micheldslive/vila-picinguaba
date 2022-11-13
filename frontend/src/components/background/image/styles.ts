import styled from 'styled-components'

export const ImageContainer = styled.div<{ background: string }>`
  width: 100%;
  position: relative;
  background: url(${({ background }) => (background ? background : '')});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -2;
  }
`

export const ImageContent = styled.div`
  padding: 14em 0;
  transition: 300ms;

  @media (max-width: 1079px) {
    padding: 7em 0;
  }
`

export const ImageTitle = styled.h1`
  text-transform: uppercase;
  color: white;
  font-family: 'Staatliches', cursive;
  gap: 20px;
  font-size: 60px;
  font-weight: 100;
  transition: inherit;

  @media (max-width: 1079px) {
    font-size: 45px;
  }
`
