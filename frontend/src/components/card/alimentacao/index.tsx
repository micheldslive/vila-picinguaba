import IconCard from '@/assets/images/alimentacao/icon.png'
import * as S from './styles'
import { PicinguabaDataStates } from '@/core/types'
import { memo } from 'react'

export { IconCard }

const AlCardComponent = ({
  id_produto,
  nome,
  descricao,
  imagens,
}: PicinguabaDataStates) => {
  return (
    <S.AlCardLink
      key={id_produto}
      to={`/detalhes/${id_produto}`}
      aria-label='card-link'
    >
      <S.AlCardContent>
        <S.AlCardRow>
          <S.CardFront>
            <S.AlCard>
              <S.AlTitleContent>
                <S.AlIcon src={IconCard} alt={nome} />
                <S.AlTitle>{nome}</S.AlTitle>
              </S.AlTitleContent>
              <S.AlImg
                src={imagens?.url_thumb}
                alt={nome}
                effect='blur'
                aria-label='card-image'
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
  )
}

export default memo(AlCardComponent)
