import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Background from '@/assets/images/detalhes/detalhes-bg.jpg'
import ImageBgTop from '@/components/backgrounds/image'
import * as G from '@/assets/styles/global'
import * as S from './styles'
import { gsapFadeMove } from '@/utils/gsapEffect'
import { useDetailStore } from '@/core/zustand'

const Detalhes = () => {
  const { product, getProduct } = useDetailStore(),
    animate = useRef<HTMLDivElement>(null),
    params = useParams()

  useEffect(() => {
    getProduct(params.id)
    gsapFadeMove(animate.current)
  }, [params, animate, getProduct])

  return (
    <>
      <Helmet>
        <title>Vila Picinguaba - Detalhes</title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <ImageBgTop background={Background} title={product?.nome} />
      <S.DetailContent>
        <G.Container>
          <S.DetailRow ref={animate}>
            <S.DetailCol lg={6} md={6}>
              <S.DetailImgContent>
                <S.DetailImg
                  src={product?.imagens?.url}
                  alt={product?.nome}
                  effect='blur'
                />
              </S.DetailImgContent>
            </S.DetailCol>
            <S.DetailCol lg={6} md={6}>
              <S.DetailInfos>
                <G.GlobalTitle>{product?.nome}</G.GlobalTitle>
                <S.DetailDesc>{product?.descricao}</S.DetailDesc>
                <S.DetailCategory>
                  {product?.categoria.nome}
                </S.DetailCategory>
              </S.DetailInfos>
            </S.DetailCol>
          </S.DetailRow>
        </G.Container>
      </S.DetailContent>
    </>
  )
}

export default Detalhes
