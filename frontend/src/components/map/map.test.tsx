import Map from '.'
import { getRenderer } from '@/core/tests'

describe('<Map />', () => {
  it('should have multiple inputs', () => {
    const { getByLabelText } = getRenderer(<Map />)

    const map = getByLabelText('map')

    expect(map).toBeInTheDocument()
  })
})
