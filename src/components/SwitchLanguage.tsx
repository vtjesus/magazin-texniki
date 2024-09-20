import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { switchLanguage } from '../shared/utils/translate-utils'

const LanguageButton: React.FC<
{ flag: string
  code: string
  onClick?: () => void
  theme: {
    text: string
    bg: string
  }
}> = ({ flag, code, onClick, theme }) => {
  return (
    <button
      onClick={onClick} className={
      `
      ${theme.text}
      ${theme.bg}
       rounded-lg hover:${theme.bg}/80 transition-colors  px-2 py-1 flex justify-center items-center gap-2
      `
    }
    >
      <img src={flag} alt={`bandera de ${code}`} />
      {code}
    </button>
  )
}

interface LanguageInterface {
  flag: string
  code: string
}

const themes: { [key: string]: { text: string, bg: string } } = {
  green: {
    text: 'text-white',
    bg: 'bg-interbrasGreen-500'
  },
  white: {
    text: 'text-white',
    bg: 'bg-interbrasGreen-900'
  }
}

interface SwitchLanguageProps {
  theme: string
}

export const SwitchLanguage: React.FC<SwitchLanguageProps> = ({ theme }) => {
  const languages = [{
    flag: '/paraguay_flag.svg',
    code: 'PY',
    lang: 'es'
  },
  {
    flag: '/brasil_flag.svg',
    code: 'BR',
    lang: 'pt'
  }]

  const selectedTheme = themes[theme]

  const storedLang = localStorage.getItem('lang')

  const navigatorLang = navigator.language?.split('-')[0]

  const [language, setLanguage] = useState<LanguageInterface>(
    languages[
      storedLang === null
        ? navigatorLang === 'pt' ? 1 : 0
        : storedLang === 'pt' ? 1 : 0
    ]
  )

  useEffect(() => {
    if (storedLang !== null) {
      return
    }
    // set default language to navigator language
    if (navigatorLang === 'pt') {
      setLanguage(languages[1])
      switchLanguage('pt')
    } else {
      setLanguage(languages[0])
      switchLanguage('es')
    }
  }, [])

  const [open, setOpen] = useState(false)

  return (
    <div className=' relative z-40'>
      <div className=' '>
        <LanguageButton
          theme={selectedTheme}
          flag={language.flag}
          code={language.code}
          onClick={() => setOpen(!open)}
        />
      </div>

      {
        open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className=' absolute flex flex-col gap-1 top-[120%] text-white'
          >
            {
              languages.map((lang) => (
                <div
                  key={lang.code}
                  className=' '
                >
                  <LanguageButton
                    theme={selectedTheme}
                    flag={lang.flag}
                    code={lang.code}
                    onClick={() => {
                      setLanguage(lang)
                      switchLanguage(lang.lang)
                      setOpen(false)
                    }}
                  />
                </div>
              ))
            }
          </motion.div>
        )
      }

    </div>
  )
}
