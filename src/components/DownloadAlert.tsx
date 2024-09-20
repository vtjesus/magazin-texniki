import React from 'react'
import { useTranslation } from 'react-i18next'

interface DownloadAlertProps {
  Title: React.FC
  message: string
  link: string
}
export const DownloadAlert: React.FC<DownloadAlertProps> = ({
  Title,
  message,
  link
}) => {
  const [show, setShow] = React.useState(true)

  const { t } = useTranslation('global')

  if (!show) return null

  return (
    <section className='fixed z-50 max-w-md p-4 bg-white border border-gray-200   bottom-3 mx-3 shadow-2xl  rounded-2xl'>
      <h2 className='font-semibold text-gray-800 '>
        <Title />
      </h2>
      <p className='mt-4 text-sm text-gray-600 '>
        {
            message
        }
      </p>
      <div className='flex items-center justify-end mt-4 gap-x-4 shrink-0'>
        <a
          href={link}
          about='_blank'
          className='text-xs text-gray-800 underline transition-colors duration-300  hover:text-gray-600 focus:outline-none'
        >
          {
            t('alert.info.download')
          }
        </a>
        <button
          onClick={() => setShow(false)}
          className=' text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none'
        >
          {
            t('alert.info.no')
          }
        </button>
      </div>
    </section>

  )
}
