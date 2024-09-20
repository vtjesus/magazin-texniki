
import { useTranslation } from 'react-i18next'
import { Logo } from '../components/Logo'
import React from 'react'

export const Footer: React.FC = (): JSX.Element => {
  const { t } = useTranslation('global')

  return (
    <footer className='  flex sm:justify-between justify-center sm:gap-0 gap-5 h-40 items-center sm:px-52 px-5 flex-col-reverse sm:flex-row text-center border-t-2  '>
      <p>
        {t('footer.copy')}
      </p>
      <span className=' text-interbrasGreen-500'>
        <Logo />
      </span>
    </footer>
  )
}
