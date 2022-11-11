import { Component } from "react";
import { Helmet } from "react-helmet-async";
import * as S from "./styles";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Página não encontrada</title>
          <meta name="description" content="Página não encontrada." />
        </Helmet>
        <S.MainError>
          <S.Container>
            <S.Error>Ops!</S.Error>
            <S.ErrorText>
              Não conseguimos encontrar a página que você está procurando.
            </S.ErrorText>
            <S.ErrorText>
              Não se preocupe pois ela está em boa companhia com outras coisas
              que não existem em nossa Vila.
            </S.ErrorText>
            <S.Link to="/">
              Voltar para a página principal
            </S.Link>
          </S.Container>
        </S.MainError>
      </>
    );
  }
}
