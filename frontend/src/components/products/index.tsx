import * as S from './styles'
import { BorderBrushTop, BorderBrushBottom } from '@/assets/styles/borders'
import { products } from '@/services/products'
import { memo } from 'react'

const Products = () => {
  return (
    <>
      <BorderBrushTop />
      <S.ProductsContent>
        <S.ProductsContainer>
          <S.ProductsRow>
            {products.map(({ id, imagem, title, to }) => (
              <S.ProductsCol key={id} lg={6} md={6}>
                <S.ProductLink to={to}>
                  <S.ProductImg src={imagem} alt={title} />
                  <S.ProductTitle>{title}</S.ProductTitle>
                </S.ProductLink>
              </S.ProductsCol>
            ))}
          </S.ProductsRow>
        </S.ProductsContainer>
      </S.ProductsContent>
      <BorderBrushBottom />
    </>
  )
}

export default memo(Products)
