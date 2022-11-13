import Hamburguer from '.'
import { getRenderer } from '@/core/tests'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import { fireEvent } from '@testing-library/react'

describe('<Hamburguer />', () => {
  it('should have a Logo, Links and Links click Event', () => {
    const { getByLabelText } = getRenderer(<Hamburguer />)
    
    const burguer = getByLabelText('burguer')
    
    fireEvent.click(burguer)
    
    const { props } = renderer.create(<Hamburguer />).toJSON() as ReactTestRendererJSON

    expect(burguer).toBeInTheDocument()
    expect(props.open).toBe(true)
  })
})
