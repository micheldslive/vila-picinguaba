import { memo, useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import { Container } from '@/assets/styles/global'
import * as S from './styles'

const Contact = () => {
  const animate = useRef<HTMLFormElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <S.ContactContent>
      <Container>
        <S.Form ref={animate}>
          <S.FormRow>
            <S.FormCol lg={6}>
              <S.Input type='text' placeholder='Nome'></S.Input>
            </S.FormCol>
            <S.FormCol lg={6}>
              <S.Input type='text' placeholder='Email'></S.Input>
            </S.FormCol>
            <S.FormCol lg={6}>
              <S.Input type='text' placeholder='Telefone'></S.Input>
            </S.FormCol>
            <S.FormCol lg={6}>
              <S.Input type='text' placeholder='Assunto'></S.Input>
            </S.FormCol>
            <S.FormCol lg={12}>
              <S.Textarea placeholder='Mensagem' rows={7}></S.Textarea>
            </S.FormCol>
            <S.Send>Enviar</S.Send>
          </S.FormRow>
        </S.Form>
      </Container>
    </S.ContactContent>
  )
}

export default memo(Contact)
