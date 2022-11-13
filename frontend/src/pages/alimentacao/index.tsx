import { Fragment, useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import { Helmet } from 'react-helmet-async'
import ImageBgTop from '@/components/background/image'
import AlCardComponent from '@/components/card/alimentacao'
import Background from '@/assets/images/alimentacao/alimentacao-bg.jpg'
import FoodImage from '@/assets/images/alimentacao/food.webp'
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
              (product, index) =>
                index <= 1 && (
                  <Fragment key={index.toString()}>
                    <AlCardComponent {...product} />
                  </Fragment>
                ),
            )}
          </S.AlGroup>
          <S.AlGroup>
            <S.AlImgCenter src={FoodImage} alt='' />
          </S.AlGroup>
          <S.AlGroup>
            {alimentacao?.map(
              (product, index) =>
                index > 1 && (
                  <Fragment key={index.toString()}>
                    <AlCardComponent {...product} />
                  </Fragment>
                ),
            )}
          </S.AlGroup>
        </S.AlContainer>
      </S.AlContent>
    </>
  )
}

export default Alimentacao
