import { Bullets, Burger } from './styles'
import { useStore } from '@/core/zustand'

const Hamburguer = () => {
  const { open, setOpen } = useStore()

  const handleClick = () => setOpen(!open)

  return (
    <Burger open={open} onClick={() => handleClick()}>
      <Bullets />
      <Bullets />
    </Burger>
  )
}

export default Hamburguer
