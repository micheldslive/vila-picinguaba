import create, { StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import {
  PicinguabaDataPersist,
  PicinguabaDataResponseStates,
  PicinguabaDefaultStates,
  PicinguabaStates,
} from '@/core/types'
import api from '@/core/api'

export const ApiRequests = async () => {
  const {
    VITE_ID_EVENTOS,
    VITE_ID_ROTEIROS,
    VITE_ID_ACOMODACAO,
    VITE_ID_ALIMENTACAO,
  } = import.meta.env

  const eventos = api.getProducts(VITE_ID_EVENTOS)
  const roteiros = api.getProducts(VITE_ID_ROTEIROS)
  const acomodacao = api.getProducts(VITE_ID_ACOMODACAO)
  const alimentacao = api.getProducts(VITE_ID_ALIMENTACAO)

  return await Promise.allSettled([eventos, roteiros, acomodacao, alimentacao])
}

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

const useDataStore = create<PicinguabaDefaultStates>(
  (persist as PicinguabaDataPersist)(
    (set, get) => ({
      eventos: [],
      roteiros: [],
      acomodacao: [],
      alimentacao: [],
      setData: async () => {
        const response = async () => {
          const response = await ApiRequests()
          const [eventos, roteiros, acomodacao, alimentacao] = response.map(
            ({ value }: PicinguabaDataResponseStates) =>
              value?.data || [],
          )
          return { eventos, roteiros, acomodacao, alimentacao }
        }

        const getStorage = get().acomodacao.length ? get() : undefined

        const { eventos, roteiros, acomodacao, alimentacao } =
          getStorage || (await response())

        console.log(eventos)

        set((state) => ({
          ...state,
          eventos,
          roteiros,
          acomodacao,
          alimentacao,
        }))
      },
    }),
    { name: 'data-store' },
  ),
)

export { useStore, useDataStore }
