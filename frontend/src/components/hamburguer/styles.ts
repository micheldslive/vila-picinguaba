import styled from 'styled-components'
import { StatesProps } from '@/core/types'

export const Burger = styled.button<StatesProps>`
  @media (min-width: 1181px) {
    display: none;
  }

  @media (max-width: 1180px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 19px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }

    span {
      width: 20px;
      height: 2px;
      background: var(--darkBlue);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(34deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        transform: ${({ open }) => (open ? 'rotate(-34deg)' : 'rotate(0)')};
      }
    }
  }
`
export const Bullets = styled.span``
