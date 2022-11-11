import axios from 'axios'

const config = {
  baseURL: import.meta.env.VITE_API_BASEURL || '',
}

const api = axios.create(config)

export default {
  getProducts: (id: string) =>
    api({ method: 'GET', url: `produtos/categoria/${id}` }),

  getProduct: (id: string) => api({ method: 'GET', url: `produtos/${id}` }),
}
