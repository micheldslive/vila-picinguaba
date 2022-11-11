import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/home'
import Alimentacao from '@/pages/alimentacao'
import Acomodacao from '@/pages/acomodacao'
import Roteiros from '@/pages/roteiros'
import Events from '@/pages/eventos'
import Details from '@/pages/details'
import NotFound from '@/pages/404'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/alimentacao' element={<Alimentacao />} />
      <Route path='/acomodacao' element={<Acomodacao />} />
      <Route path='/roteiros' element={<Roteiros />} />
      <Route path='/eventos' element={<Events />} />
      <Route path='/detalhes/:id' element={<Details />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routers
