import { Fragment, memo, useEffect, useRef } from 'react'
import * as G from '@/assets/styles/global'
import * as S from './styles'
import { VillageParallax } from '@/components/parallax'
import { parallax } from '@/services/home'
import { gsapFadeMove } from '@/utils/gsapEffect'

const Village = () => {
  const animate = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsapFadeMove(animate.current)
  }, [animate])

  return (
    <>
      <S.VillageContent>
        <S.Container>
          <S.VillageRow ref={animate}>
            <S.VillageCol lg={6} md={12}>
              <G.GlobalTitle isColor={true}>
                Uma Village preservada entre o mar e a floresta.
              </G.GlobalTitle>
              <S.VillageDescription>
                Em tupi-guarani, Picinguaba quer dizer “refúgio dos peixes”.
                Picinguaba está localizada em uma tranquila baía no coração do
                Parque Natural da Mata Atlântica – floresta tropical e costeira,
                que se estende entre o Rio de Janeiro e São Paulo – Na região de
                Ubatuba e à meia hora de carro de Paraty. Aos olhos, Picinguaba
                surge como uma porta de entrada para um Brasil antigo,
                reconhecida pela UNESCO como patrimônio cultural mundial. Em
                Picinguaba tudo parece estar em perfeita harmonia. A força suave
                do vento, que faz o movimento dos barcos no mar e redesenha a
                linha do horizonte a cada pôr-do-sol, é a mesma que faz voar as
                folhas das árvores. A sabedoria caiçara é conhecedora de terra e
                mar. As pessoas se alimentam do que vem na rede do pescador,
                respeitam os quereres da terra.
              </S.VillageDescription>
            </S.VillageCol>
            <S.VillageCol lg={6} md={12}>
              <S.VillageImageContent>
                <S.VillageImage src={S.VillageImageJPG} alt='' />
                <S.VillageTitleContent>
                  <S.VillageTitle>
                    Village de
                    <br />
                    Pescadores
                  </S.VillageTitle>
                </S.VillageTitleContent>
              </S.VillageImageContent>
            </S.VillageCol>
          </S.VillageRow>
        </S.Container>
      </S.VillageContent>
      {parallax.map((item, index) => (
        <Fragment key={index.toString()}>
          <VillageParallax {...item} />
        </Fragment>
      ))}
      <S.VillageParallaxEnd />
    </>
  )
}

export default memo(Village)
