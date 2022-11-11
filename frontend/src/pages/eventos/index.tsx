import { memo, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { gsapFadeMove } from '@/utils/gsapEffect'
import ImageBgTop from '@/components/backgrounds/image'
import Background from '@/assets/images/eventos/eventos-bg.jpg'
import { GlobalTitle, GlobalTitleContent } from '@/assets/styles/global'
import * as S from './styles'
import { useDataStore } from '@/core/zustand'

const Events = () => {
  const { eventos } = useDataStore(),
    animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Eventos</title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <ImageBgTop background={Background} title={'Eventos'} />
      <GlobalTitleContent>
        <GlobalTitle isColor={true}>Eventos</GlobalTitle>
      </GlobalTitleContent>
      <S.EventsContent>
        <S.EventsContainer>
          <S.EventRow ref={animate}>
            {eventos?.map(({ id_produto, imagens, nome, descricao }) => (
              <S.EventCol key={id_produto} lg={6} md={6}>
                <S.EventLink to={`/detalhes/${id_produto}`}>
                  <S.EventCard>
                    <S.EventIMG src={imagens[0].url_thumb} alt={nome} />
                    <S.EventTitle>{nome}</S.EventTitle>
                    <S.EventDesc>{descricao}</S.EventDesc>
                  </S.EventCard>
                </S.EventLink>
              </S.EventCol>
            ))}
          </S.EventRow>
        </S.EventsContainer>
      </S.EventsContent>
    </>
  )
}

export default memo(Events)
