import Header from '.'
import { getRenderer } from '@/core/tests'
import { createMemoryHistory } from '@remix-run/router'
import { Router } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'
import Menu from '@/services/nav-menu.json'

describe('<Header />', () => {
  it('should have a Logo, Links, Links click Event', () => {
    const history = createMemoryHistory({ initialEntries: ['/alimentacao'] })

    const { getByLabelText, getByText } = getRenderer(
      <Router navigator={history} location={'/alimentacao'}>
        <Header />
      </Router>,
    )

    const logo = getByLabelText('logo-link')

    Menu.forEach(({ go, title }) => {
      const link = getByText(title)

      expect(link).toBeInTheDocument()

      fireEvent.click(link)
      expect(history.location.pathname).toBe(go)
    })

    fireEvent.click(logo)

    expect(logo).toBeInTheDocument()
    expect(history.location.pathname).toBe('/')
  })
})
