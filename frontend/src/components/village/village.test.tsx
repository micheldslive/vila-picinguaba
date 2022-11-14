import Village from '.'
import { getRenderer } from '@/core/tests'
import { VillageImageJPG } from './styles'

describe('<Village />', () => {
  it('should have a Village and Image Background', () => {
    const { getByLabelText } = getRenderer(<Village />)

    const village = getByLabelText('village-content')
    const image = getByLabelText('village-image')

    expect(village).toBeInTheDocument()
    expect(image).toBeInTheDocument()

    expect(image).toHaveAttribute('src', VillageImageJPG)
  })
})
