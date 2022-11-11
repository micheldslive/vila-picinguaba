import { AxiosResponse } from 'axios'
import { StateCreator } from 'zustand'
import { PersistOptions } from 'zustand/middleware'

export interface PicinguabaStates {
  open: boolean
  setOpen: (name: boolean) => void
  sticky: boolean
  setSticky: (sticky: boolean) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export interface PicinguabaDataStates {
  id_produto: string
  nome: string
  preco: number
  disponivel: number
  descricao: string
  categoria: {
    id_categoria: string
    categoria: string
  }
  imagens: PicinguabaDataImagemState[]
}

interface PicinguabaDataImagemState {
  id_img: string
  url: string
  url_thumb: string
}

export interface PicinguabaDefaultStates {
  eventos: PicinguabaDataStates[]
  roteiros: PicinguabaDataStates[]
  acomodacao: PicinguabaDataStates[]
  alimentacao: PicinguabaDataStates[]
  setData: () => void
}

export interface PicinguabaDataResponseStates {
  status: string
  value?: AxiosResponse
}

export type PicinguabaDataPersist = (
  config: StateCreator<PicinguabaDefaultStates>,
  options: PersistOptions<PicinguabaDefaultStates>,
) => StateCreator<PicinguabaDefaultStates>

export interface ParallaxArrayProps {
  parallax: ParallaxProps[]
}

export interface ParallaxProps {
  id: number
  bg: string
  bdBg: string
  bdColor: string
  bgColor: string
  title: string
  desc: string
}

export interface StatesProps {
  open?: boolean
  sticky?: boolean
}

export interface ImageBgTopProps {
  background: string
  title: string
}

export interface VillageProps {
  gradient?: boolean
  bgColor?: string
  bdColor?: string
  bdBg?: string
  bg?: string
}
