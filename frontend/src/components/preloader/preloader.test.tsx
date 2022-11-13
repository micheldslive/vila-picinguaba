import Preloader from '.'
import { getRenderer } from '@/core/tests'

describe('<Preloader />', () => {
  it('should have a Preloader', () => {
    const { getByLabelText } = getRenderer(<Preloader />)

    const map = getByLabelText('preloader')

    expect(map).toBeInTheDocument()
  })
})
