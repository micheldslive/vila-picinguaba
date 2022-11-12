import { useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import { Helmet } from 'react-helmet-async'
import ImageBgTop from '@/components/backgrounds/image'
import Background from '@/assets/images/alimentacao/alimentacao-bg.jpg'
import FoodImage from '@/assets/images/alimentacao/food.webp'
import IconCard from '@/assets/images/alimentacao/icon.png'
import * as G from '@/assets/styles/global'
import * as S from './styles'
import { useDataStore } from '@/core/zustand'

const Alimentacao = () => {
  const { alimentacao } = useDataStore(),
    animate = useRef<HTMLElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [])

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Alimentação</title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <ImageBgTop background={Background} title={'Alimentação'} />
      <G.GlobalTitleContent>
        <G.GlobalTitle>Restaurantes</G.GlobalTitle>
        <G.GlobalSubtitle>
          Os quiosques e restaurantes são um convite para desfrutar da
          gastronomia local em contato com a cultura da pesca de cerco, que
          todos os dias enche o balaio das espécies mais comuns da região.
        </G.GlobalSubtitle>
      </G.GlobalTitleContent>
      <S.AlContent>
        <S.AlContainer ref={animate}>
          <S.AlGroup>
            {alimentacao?.map(
              ({ id_produto, nome, descricao, imagens }, index) =>
                index <= 1 ? (
                  <S.AlCardLink key={id_produto} to={`/detalhes/${id_produto}`}>
                    <S.AlCardContent>
                      <S.AlCardRow>
                        <S.CardFront>
                          <S.AlCard>
                            <S.AlTitleContent>
                              <S.AlIcon src={IconCard} alt={nome} />
                              <S.AlTitle>{nome}</S.AlTitle>
                            </S.AlTitleContent>
                            <S.AlImg
                              src={imagens[0].url_thumb}
                              alt={nome}
                              effect='blur'
                            />
                          </S.AlCard>
                        </S.CardFront>
                        <S.CardBack>
                          <S.AlCard>
                            <S.AlTitleContent>
                              <S.AlIcon src={IconCard} alt={nome} />
                              <S.AlTitle>Detalhes</S.AlTitle>
                            </S.AlTitleContent>
                            <S.AlDescContent>
                              <S.AlDesc>{descricao}</S.AlDesc>
                            </S.AlDescContent>
                          </S.AlCard>
                        </S.CardBack>
                      </S.AlCardRow>
                    </S.AlCardContent>
                  </S.AlCardLink>
                ) : (
                  ''
                ),
            )}
          </S.AlGroup>
          <S.AlGroup>
            <S.AlImgCenter src={FoodImage} alt='' />
          </S.AlGroup>
          <S.AlGroup>
            {alimentacao?.map(
              ({ id_produto, nome, descricao, imagens }, index) =>
                index > 1 ? (
                  <S.AlCardLink key={id_produto} to={`/detalhes/${id_produto}`}>
                    <S.AlCardContent>
                      <S.AlCardRow>
                        <S.CardFront>
                          <S.AlCard>
                            <S.AlTitleContent>
                              <S.AlIcon src={IconCard} alt={nome} />
                              <S.AlTitle>{nome}</S.AlTitle>
                            </S.AlTitleContent>
                            <S.AlImg src={imagens[0].url_thumb} alt='' />
                          </S.AlCard>
                        </S.CardFront>
                        <S.CardBack>
                          <S.AlCard>
                            <S.AlTitleContent>
                              <S.AlIcon src={IconCard} alt={nome} />
                              <S.AlTitle>Detalhes</S.AlTitle>
                            </S.AlTitleContent>
                            <S.AlDescContent>
                              <S.AlDesc>{descricao}</S.AlDesc>
                            </S.AlDescContent>
                          </S.AlCard>
                        </S.CardBack>
                      </S.AlCardRow>
                    </S.AlCardContent>
                  </S.AlCardLink>
                ) : (
                  ''
                ),
            )}
          </S.AlGroup>
        </S.AlContainer>
      </S.AlContent>
    </>
  )
}

export default Alimentacao
