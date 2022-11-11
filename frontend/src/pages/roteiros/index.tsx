import { Helmet } from 'react-helmet-async'
import { useEffect, useRef } from 'react'
import { gsapFadeMove } from '@/utils/gsapEffect'
import ImageBgTop from '@/components/backgrounds/image'
import Background from '@/assets/images/roteiros/roteiros-bg.jpg'
import * as S from './styles'
import * as G from '@/assets/styles/global'
import Map from '@/components/map'
import { useDataStore } from '@/core/zustand'

const Roteiros = () => {
  const { roteiros } = useDataStore(),
    animate = useRef<HTMLElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Roteiros</title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <ImageBgTop background={Background} title={'Roteiros'} />
      <G.GlobalTitleContent>
        <G.GlobalTitle>Planejamento Diário</G.GlobalTitle>
      </G.GlobalTitleContent>
      <S.GuideContent>
        <G.Container ref={animate}>
          {roteiros?.map(({ id_produto, nome, imagens, descricao }, index) => (
            <S.RoteiroCard key={id_produto} to={`/detalhes/${id_produto}`}>
              <S.CardContent>
                <S.CardIMG src={imagens[0].url_thumb} alt={nome} />
                <S.CardInfo>
                  <S.CardTitle>{nome}</S.CardTitle>
                  <S.CardDesc>{descricao}</S.CardDesc>
                </S.CardInfo>
              </S.CardContent>
              <S.CardNumber>
                <S.Number>0{index + 1}</S.Number>
              </S.CardNumber>
            </S.RoteiroCard>
          ))}
        </G.Container>
      </S.GuideContent>
      <Map />
    </>
  )
}

export default Roteiros
