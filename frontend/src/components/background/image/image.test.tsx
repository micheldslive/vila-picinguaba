import ImageBgTop from '.'
import Background from '@/assets/images/acomodacao/acomodacao-bg.jpg'
import { getRenderer } from '@/core/tests'

describe('<ImageBgTops />', () => {
  it('should have a Background style and Title element', () => {
    const { getByLabelText, getByText } = getRenderer(
      <ImageBgTop background={Background} title={'Title'} />,
    )
    const background = getByLabelText('image-container')
    const title = getByText('Title')

    expect(background).toHaveStyleRule('background', `url(${Background})`)
    expect(title).toBeInTheDocument()
  })
})
