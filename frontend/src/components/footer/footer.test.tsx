import Footer from '.'
import { getRenderer } from '@/core/tests'
import { createMemoryHistory } from '@remix-run/router'
import { Router } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'
import Menu from '@/services/nav-menu.json'

describe('<Footer />', () => {
  it('should have a Logo, Links, Links click Event', () => {
    const history = createMemoryHistory({ initialEntries: ['/alimentacao'] })

    const { getByLabelText, getByText } = getRenderer(
      <Router navigator={history} location={'/alimentacao'}>
        <Footer />
      </Router>,
    )
    
    Menu.forEach(({ go, title }) => {
      const link = getByText(title)
      
      fireEvent.click(link)

      expect(link).toBeInTheDocument()
      expect(history.location.pathname).toBe(go)
    })

    expect(getByLabelText('logo')).toBeInTheDocument()
    expect(getByText('Uma vila de pescadores preservada entre o mar e a floresta.')).toBeInTheDocument()
  })
})
