import create from 'zustand'
import {
  PicinguabaDataResponseStates,
  PicinguabaDefaultStates,
  PicinguabaDetailsState,
  PicinguabaStates,
} from '@/core/types'
import api from '@/core/api'

const useStore = create<PicinguabaStates>((set) => ({
  open: false,
  setOpen: (open) =>
    set((state) => ({
      ...state,
      open,
    })),

  sticky: false,
  setSticky: (sticky) =>
    set((state) => ({
      ...state,
      sticky,
    })),

  loading: false,
  setLoading: (loading) =>
    set((state) => ({
      ...state,
      loading,
    })),

  data: {},
}))

const useDataStore = create<PicinguabaDefaultStates>((set) => ({
  eventos: null,
  roteiros: null,
  acomodacao: null,
  alimentacao: null,
  setData: async () => {
    const response = await api.getProducts()
    const [eventos, roteiros, acomodacao, alimentacao] = response.map(
      ({ value }: PicinguabaDataResponseStates) => value?.data || [],
    )

    set((state) => ({
      ...state,
      eventos,
      roteiros,
      acomodacao,
      alimentacao,
    }))
  },
}))

const useDetailStore = create<PicinguabaDetailsState>((set) => ({
  product: null,
  getProduct: async (product_id: string | undefined) => {
    set((state) => ({
      ...state,
      product: null,
    }))

    const { data } = await api.getProduct(product_id)

    set((state) => ({
      ...state,
      product: data,
    }))

    return data
  },
}))

export { useStore, useDataStore, useDetailStore }
