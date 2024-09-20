import { useTranslateStore } from '../stores/useTranslate'

export const switchLanguage = (lang: string) => {
  const lang_ = useTranslateStore.getState().lang
  const setLang = useTranslateStore.getState().setLang
  if (lang !== lang_) {
    setLang(lang)
    localStorage.setItem('lang', lang)
    console.log('switched to', lang)
  }
}
