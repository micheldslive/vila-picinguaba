import Video, { VideoSRC } from '.'
import { getRenderer } from '@/core/tests'

describe('<Video />', () => {
  it('should have a Video src', () => {
    const { getByLabelText } = getRenderer(<Video />)
    const video = getByLabelText('video-element')

    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('src', VideoSRC)
  })
})
