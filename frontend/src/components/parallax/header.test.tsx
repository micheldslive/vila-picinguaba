import { VillageParallax } from '.'
import { getRenderer } from '@/core/tests'
import { parallax } from '../../services/home'

describe('<VillageParallax />', () => {
  parallax.map((item) => {
    it('should have a Title, Description, Background and waveBackground', () => {
      const { getByLabelText } = getRenderer(<VillageParallax {...item} />)

      const title = getByLabelText('parallax-title')
      const description = getByLabelText('parallax-description')
      const background = getByLabelText('parallax-bg')
      const waveBackground = getByLabelText('parallax-wave')

      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
      expect(background).toBeInTheDocument()
      expect(waveBackground).toBeInTheDocument()

      expect(background).toHaveStyleRule('background', `url(${item.background})`)
      expect(waveBackground).toHaveStyleRule('background', `url(${item.waveBackground}) ${item.waveColor}`)
    })
  })
})
