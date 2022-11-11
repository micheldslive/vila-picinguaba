import NavMenu from '@/services/nav-menu.json'
import { Container } from '@/assets/styles/global'
import * as S from './styles'
import { memo } from 'react'

const Footer = () => {
  return (
    <S.FooterContent>
      <S.FooterAnimation />
      <S.FooterMain>
        <Container>
          <S.FooterRow>
            <S.FooterCol lg={6} md={6} sm={12}>
              <S.LogoPicinguabaIMG src={S.LogoSVG} alt='Logo Picinguaba' />
              <S.Paragraph>
                Uma vila de pescadores preservada entre o mar e a floresta.
              </S.Paragraph>
              <S.RS>
                <S.RSLink
                  href='https://www.facebook.com/micheldslive'
                  target='_blank'
                >
                  <S.Facebook />
                </S.RSLink>
                <S.RSLink
                  href='https://www.instagram.com/micheldslive'
                  target='_blank'
                >
                  <S.Instagram />
                </S.RSLink>
                <S.RSLink
                  href='https://www.linkedin.com/in/micheldslive'
                  target='_blank'
                >
                  <S.Linkedin />
                </S.RSLink>
                <S.RSLink href='https://www.youtube.com/vila' target='_blank'>
                  <S.Youtube />
                </S.RSLink>
              </S.RS>
            </S.FooterCol>
            <S.FooterCol lg={6} md={6} sm={12}>
              <S.ColTitle>Menu</S.ColTitle>
              {NavMenu.map(({ title, go }) => (
                <S.ColLink key={title} to={go}>
                  {title}
                </S.ColLink>
              ))}
            </S.FooterCol>
          </S.FooterRow>
        </Container>
      </S.FooterMain>
      <S.CopyMain>
        <Container>
          <S.FooterRow>
            <S.CopyContent>
              <S.CopyText>
                Feito com ❤️ pela{' '}
                <S.CopyLink href='#' target='_blank' rel='noreferrer'>
                  {' '}
                  Equipe 02 - Desafio Chefão
                </S.CopyLink>
              </S.CopyText>
            </S.CopyContent>
          </S.FooterRow>
        </Container>
      </S.CopyMain>
    </S.FooterContent>
  )
}

export default memo(Footer)
