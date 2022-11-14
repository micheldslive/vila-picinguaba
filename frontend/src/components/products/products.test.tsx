import Products from '.'
import { getRenderer } from '@/core/tests'
import { createMemoryHistory } from '@remix-run/router'
import { Router } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'
import { products } from '@/services/products'

describe('<Products />', () => {
  it('should have a Products, Product Link Click and Product Image', () => {
    const history = createMemoryHistory({ initialEntries: ['/alimentacao'] })

    const { getByLabelText, getByText } = getRenderer(
      <Router navigator={history} location={'/alimentacao'}>
        <Products />
      </Router>,
    )

    const productsContent = getByLabelText('products-content')

    expect(productsContent).toBeInTheDocument()

    products.forEach(({ title, imagem, to }) => {
      const image = getByLabelText(title)
      const link = getByLabelText(to)

      fireEvent.click(link)

      expect(image).toBeInTheDocument()
      expect(link).toBeInTheDocument()
      expect(image).toHaveAttribute('src', imagem)
      expect(history.location.pathname).toBe(to)
    })
  })
})
