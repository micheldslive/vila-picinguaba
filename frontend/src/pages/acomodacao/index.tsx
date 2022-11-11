import { memo, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsapFadeMove, gsapMoveLeft, gsapMoveRight } from '@/utils/gsapEffect'
import ImageBgTop from '@/components/backgrounds/image'
import Background from '@/assets/images/acomodacao/acomodacao-bg.jpg'
import * as G from '@/assets/styles/global'
import * as S from './styles'
import { useDataStore } from '@/core/zustand'

const Acomodacao = () => {
  const { acomodacao } = useDataStore(),
    animate = useRef<HTMLDivElement>(null),
    moveFish = useRef<HTMLImageElement>(null),
    moveNet = useRef<HTMLImageElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
    gsapMoveRight(moveFish.current)
    gsapMoveLeft(moveNet.current)
  }, [])
  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Acomodação</title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <ImageBgTop background={Background} title={'Acomodação'} />
      <G.GlobalTitleContent>
        <G.GlobalTitle>Pousadas</G.GlobalTitle>
        <G.GlobalSubtitle>
          As pousadas e casas de aluguel oferecem conforto e paz pra quem
          procura descanso e calmaria, como um verdadeiro refúgio.
        </G.GlobalSubtitle>
      </G.GlobalTitleContent>
      <S.AcomContent>
        <S.AcomFish src={S.Fish} alt='' ref={moveFish} />
        <S.AcomNet src={S.Net} alt='' ref={moveNet} />
        <S.AcomContainer ref={animate}>
          {acomodacao?.map(({ id_produto, imagens, nome, descricao }) => (
            <S.AcomCardLink key={id_produto} to={`/detalhes/${id_produto}`}>
              <S.AcomCard>
                <S.AcomIMG src={imagens[0]?.url_thumb} alt={nome} />
                <S.AcomInfo>
                  <S.AcomTitle>{nome}</S.AcomTitle>
                  <S.AcomDesc>{descricao}</S.AcomDesc>
                </S.AcomInfo>
              </S.AcomCard>
            </S.AcomCardLink>
          ))}
        </S.AcomContainer>
      </S.AcomContent>
    </>
  )
}

export default memo(Acomodacao)
