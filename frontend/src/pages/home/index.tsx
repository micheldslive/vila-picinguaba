import { Helmet } from 'react-helmet-async'
import Video from '@/components/background/video'
import Products from '@/components/products'
import Village from '@/components/village'
import Contact from '@/components/contact'
import Map from '@/components/map'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Vila Picinguaba - Uma vila de pescadores preservada entre o mar e a
          floresta.
        </title>
        <meta
          name='description'
          content='Uma vila de pescadores preservada entre o mar e a floresta.'
        />
      </Helmet>
      <Video />
      <Products />
      <Village />
      <Contact />
      <Map />
    </>
  )
}

export default Home