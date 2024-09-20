import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface PrimaryButtonProps {
  to: string
  className?: string
}

const ExternalLink = (props: any): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-external-link'
    {...props}
  >
    <path d='M15 3h6v6' />
    <path d='M10 14 21 3' />
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
  </svg>
)

export const PrimaryButton = ({ to, className }: PrimaryButtonProps): JSX.Element => {
  const { t } = useTranslation('global')
  return (
    <Link
      to={to}
      onClick={
        () => {
          window.scrollTo(0, 0)
        }
      }
      className={
        `
        text-nowrap shadow-2xl flex mt-1 transition-colors bg-interbrasGreen-500 hover:bg-green-600 text-white  text-lg justify-center items-center rounded-xl py-1  px-4 gap-2 
        ${className !== undefined ? className : ''}
        `
      }
    >
      {t('primaryButton.text')}
      <ExternalLink className=' size-4' />
    </Link>
  )
}
