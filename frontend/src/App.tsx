import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Preloader from '@/components/preloader'
import Header from '@/components/header'
import { Padding } from '@/assets/styles/main'
import Routers from '@/routes'
import Footer from '@/components/footer'
import ScrollToTop from '@/utils/ScrollToTop'
import { useEffect } from 'react'
import { useDataStore } from './core/zustand'

const App = () => {
  const { setData } = useDataStore()

  useEffect(() => {
    setData()
  }, [setData])

  return (
    <Router>
      <Preloader />
      <Header />
      <Padding />
      <ScrollToTop />
      <HelmetProvider>
        <Routers />
      </HelmetProvider>
      <Footer />
    </Router>
  )
}

export default App
