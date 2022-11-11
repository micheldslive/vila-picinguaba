import Menu from '@/services/nav-menu.json'
import * as S from './styles'
import Hamburguer from '@/components/hamburguer'
import { useStore } from '@/core/zustand'
import { useEffect } from 'react'

const Header = () => {
  const { open, setOpen, sticky, setSticky } = useStore()

  const handleCloseMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    onscroll = () => {
      setSticky(window.scrollY > 250)
    }
  }, [setSticky])

  return (
    <S.HeaderContent open={open} sticky={sticky}>
      <S.HeaderContainer sticky={sticky}>
        <S.LogoLink to='/'>
          <S.Logo />
        </S.LogoLink>
        <S.Navigation open={open}>
          <S.ListContainer>
            {Menu.map(({ title, go }) => (
              <S.List key={title}>
                <S.MenuLink to={go} onClick={() => handleCloseMenu()}>
                  {title}
                </S.MenuLink>
              </S.List>
            ))}
          </S.ListContainer>
        </S.Navigation>
        <Hamburguer />
      </S.HeaderContainer>
    </S.HeaderContent>
  )
}

export default Header
