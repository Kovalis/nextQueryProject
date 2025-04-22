import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IThemeState {
  isDarkTheme: boolean
  setToggleTheme: () => void
}

export const useMainStore = create<IThemeState>(
  persist((set) => ({
    isDarkTheme: false,
    setToggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
  }))
)
