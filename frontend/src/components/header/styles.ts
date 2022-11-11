import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as LogoPicinguaba } from '@/assets/images/logo-picinguaba.svg'
import WaveComp from '@/assets/images/wave.svg'
import { StatesProps } from '@/core/types'

export const HeaderContent = styled.header<StatesProps>`
  position: fixed;
  width: 100%;
  height: ${({ open }) => (open ? '100%' : '')};
  background-color: white;
  border-bottom: ${({ sticky }) => (sticky ? '1px solid #ddd' : '')};
  transition: all 0.1s linear;
  z-index: 2;
  background-color: var(--gray);
`

export const HeaderContainer = styled.section<StatesProps>`
  transition: 300ms;
  height: ${({ sticky }) => (sticky ? '75px' : '100px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(Link)`
  position: relative;
  display: grid;

  svg path {
    transform-origin: center center;
    transform-box: fill-box;
  }
`

export const Logo = styled(LogoPicinguaba)`
  height: 67px;
  z-index: 10;
`

export const MenuLink = styled(NavLink)`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  transition: 300ms;

  &::after {
    content: '';
    width: 0;
    height: 7px;
    background: url(${WaveComp});
    background-repeat: repeat-x;
    transition: all 0.4s linear;
  }

  &.active::after,
  &:hover::after {
    content: '';
    width: 52px;
    height: 7px;
    padding-right: 4px;
  }

  &:hover,
  & svg path {
    color: black;
    fill: black;
  }
`

export const Navigation = styled.nav<StatesProps>`
  z-index: 0;

  @media (max-width: 1180px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 110%;
    background: var(--gray);
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;

    ${({ open }) =>
      open &&
      `
      visibility: visible;
      opacity: 1;
      transition: all 0.2s linear;
    `}
  }

  @media (min-width: 1181px) {
    &:hover li:hover > div {
      visibility: visible;
      transform: translateY(-1%);
      border-bottom: 1px solid #ddd;
    }

    &:hover li > a,
    &:hover li > a svg path {
      transition: all 0.2s;
      color: #bbb;
      fill: #bbb;
    }

    &:hover li > a:hover,
    &:hover li > a:hover svg path {
      transition: all 0.2s;
      color: black;
      fill: black;
    }

    &:hover a:hover svg {
      transform: rotateZ(-180deg);
    }
  }
`

export const ListContainer = styled.div`
  @media (min-width: 1181px) {
    display: inline-flex;
    gap: 30px;
  }

  @media (max-width: 1180px) {
    height: 50%;
    overflow: auto;
  }
`

export const List = styled.li`
  @media (max-width: 1180px) {
    padding-bottom: 12px;
  }
`
