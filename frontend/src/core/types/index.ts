import { AxiosResponse } from 'axios'

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
    nome: string
  }
  imagens: PicinguabaDataImagemState
}

interface PicinguabaDataImagemState {
  id_img: string
  url: string
  url_thumb: string
}

export interface PicinguabaDefaultStates {
  eventos: PicinguabaDataStates[] | null
  roteiros: PicinguabaDataStates[] | null
  acomodacao: PicinguabaDataStates[] | null
  alimentacao: PicinguabaDataStates[] | null
  setData: () => void
}

export interface PicinguabaDataResponseStates {
  status: string
  value?: AxiosResponse
}

export interface PicinguabaDetailsState {
  product: PicinguabaDataStates | null
  getProduct: (product_id: string | undefined) => Promise<PicinguabaDataStates>
}

export interface ParallaxArrayProps {
  parallax: ParallaxProps[]
}

export interface ParallaxProps {
  id: number
  background: string
  waveBackground: string
  waveColor: string
  backgroundColor: string
  title: string
  description: string
}

export interface StatesProps {
  open?: boolean
  sticky?: boolean
}

export interface ImageBgTopProps {
  background: string
  title?: string
}

export interface VillageProps {
  gradient?: boolean
  backgroundColor?: string
  waveColor?: string
  waveBackground?: string
  background?: string
}
