import 'bootstrap/dist/css/bootstrap-grid.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import TitleSVG from '@/assets/images/title-wave.svg'

interface StyledProps {
  isColor?: boolean
}

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');

:root {
  --gray: #F7F6F2;
  --gray2: #F1F1F1;
  --gray3: #EEEEEE;
  --gray4: #555;
  --darkBlue: #133754;
  --blue: #0194C6;
  --blue1: #2EC6EF;
  --orange: #EA772A;
  --orange1: #FFC62F;
  --orange2: #e15e0a;
  --orange3: #ea914b;
  --green: #51734B;
  --green1: #75BD81;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: 'Livvic', sans-serif;
  background-color: white;

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: var(--orange);
  outline: 1px solid var(--orange);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
  list-style: none;
}

a, a:hover {
  color: var(--darkBlue);
}

section {
  width: 85%;
  margin: 0 auto;
  max-width: 1180px;

  @media (max-width: 600px) {
    width: 90%;
  }
}

.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}

`

export const Container = styled.section``

export const GlobalTitleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  margin: 0 auto;
`

export const GlobalTitle = styled.h1<StyledProps>`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: ${({ isColor }) => (isColor ? 'white' : 'var(--darkBlue)')};
  font-family: 'Staatliches', cursive;
  gap: 20px;
  font-size: 40px;
  font-weight: 100;
  transition: 300ms;

  &::before {
    content: '';
    background: url(${TitleSVG});
    width: 100px;
    height: 13px;
    background-repeat: no-repeat;
  }

  @media (max-width: 560px) {
    font-size: 25px;

    &::before {
      content: '';
      width: 60px;
      height: 9px;
    }
  }
`

export const GlobalSubtitle = styled.p`
  padding-top: 20px;
  margin: 0 15px;
  text-align: center;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 600px;
  margin-bottom: -130px;
  transition: 300ms;
  filter: grayscale(100%) contrast(100%);
  position: relative;

  @media (max-width: 800px) {
    height: 470px;
  }
`
