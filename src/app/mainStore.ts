import { create } from 'zustand'

interface IThemeState {
  theme: boolean
  setToggleTheme: () => void
}

export const useMainStore = create<IThemeState>((set) => ({
  theme: false,
  setToggleTheme: () => set((state) => ({ theme: !state.theme })),
}))
