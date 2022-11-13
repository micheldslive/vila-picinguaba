import Contact from '.'
import { getRenderer } from '@/core/tests'

describe('<Contact />', () => {
  it('should have multiple inputs', () => {
    const { getAllByLabelText } = getRenderer(<Contact />)

    const inputs = getAllByLabelText('input')

    inputs.map((input) => {
      expect(input).toBeInTheDocument()
    })
  })
})
