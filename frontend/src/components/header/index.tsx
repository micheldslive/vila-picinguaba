import Menu from '@/services/nav-menu.json'
import {
  HeaderContainer,
  HeaderContent,
  List,
  ListContainer,
  Logo,
  LogoLink,
  MenuLink,
  Navigation,
} from '@/assets/styles/header'
import Hamburguer from '@/components/hamburguer'
import useStore from '@/core/zustand'
import { useEffect } from 'react'

const Header = () => {

  const { open, setOpen, sticky, setSticky } = useStore()

  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    onscroll = () => {
      setSticky(window.scrollY > 250)
    }
  }, [setSticky])

  return (
    <HeaderContent open={open} sticky={sticky}>
      <HeaderContainer sticky={sticky}>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <Navigation open={open}>
          <ListContainer>
            {Menu.map(({ title, go }) => (
              <List key={title}>
                <MenuLink to={go} onClick={() => closeMenu()}>
                  {title}
                </MenuLink>
              </List>
            ))}
          </ListContainer>
        </Navigation>
        <Hamburguer />
      </HeaderContainer>
    </HeaderContent>
  )
}

export default Header
