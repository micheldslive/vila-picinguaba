import create from 'zustand'

interface PicinguabaStates {
  open: boolean
  setOpen: (name: boolean) => void
  sticky: boolean
  setSticky: (sticky: boolean) => void
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
    }))
}))

export default useStore
