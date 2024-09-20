import { create } from 'zustand'

interface ITranslateStore {
  lang: string
  setLang: (lang: string) => void
  showTranslateToggle: boolean
  setShowTranslateToggle: (showToggle: boolean) => void
}

const langLocalStorage = localStorage.getItem('lang')

export const useTranslateStore = create<ITranslateStore>(set => ({
  lang: langLocalStorage !== null ? langLocalStorage : 'es',
  setLang: (lang: string) => set(() => ({ lang })),
  showTranslateToggle: false,
  setShowTranslateToggle: (showToggle: boolean) =>
    set(() => ({ showTranslateToggle: showToggle }))
}))
