import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASEURL

const config = {
  baseURL,
}

const api = axios.create(config)

export default {
  async getProducts() {
    const get = (id: string) =>
      api({ method: 'GET', url: `/produtos/categoria/${id}` })

    const {
      VITE_ID_EVENTOS,
      VITE_ID_ROTEIROS,
      VITE_ID_ACOMODACAO,
      VITE_ID_ALIMENTACAO,
    } = import.meta.env

    const eventos = get(VITE_ID_EVENTOS)
    const roteiros = get(VITE_ID_ROTEIROS)
    const acomodacao = get(VITE_ID_ACOMODACAO)
    const alimentacao = get(VITE_ID_ALIMENTACAO)

    return await Promise.allSettled([
      eventos,
      roteiros,
      acomodacao,
      alimentacao,
    ])
  },

  getProduct(id: string = '2327918a-748d-4a9b-af77-3807500589d6') {
    return api({ method: 'GET', url: `/produtos/${id}` })
  },
}
