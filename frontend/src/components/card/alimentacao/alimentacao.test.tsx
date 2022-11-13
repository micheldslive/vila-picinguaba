import AlCardComponent from '.'
import { getRenderer } from '@/core/tests'
import { createMemoryHistory } from '@remix-run/router'
import { Router } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'

const product = {
  id_produto: '1',
  nome: 'Nome',
  preco: 0,
  disponivel: 0,
  descricao: 'Descricao',
  categoria: {
    id_categoria: '1',
    nome: 'Categoria',
  },
  imagens: {
    id_img: '1',
    url: 'https://i.postimg.cc/s22Pwzq4/08.jpg',
    url_thumb: 'https://i.postimg.cc/1XvbnnR6/pousada-1.jpg',
  },
}

describe('<AlCardComponent />', () => {
  it('should have a Name, Description, Click Event and Image element / src', () => {
    const history = createMemoryHistory({ initialEntries: ['/alimentacao'] })

    const { getByLabelText, getByText } = getRenderer(
      <Router navigator={history} location={'/alimentacao'}>
        <AlCardComponent {...product} />
      </Router>,
    )

    const name = getByText('Nome')
    const description = getByText('Descricao')
    const image = getByLabelText('card-image')

    expect(name).toBeInTheDocument()

    expect(description).toBeInTheDocument()

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', product.imagens.url_thumb)

    fireEvent.click(getByLabelText('card-link'))
    expect(history.location.pathname).toBe(`/detalhes/${product.id_produto}`)
  })
})
